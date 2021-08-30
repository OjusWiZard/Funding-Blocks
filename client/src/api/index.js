import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import axios from "axios";

export const Tezos = new TezosToolkit(process.env.REACT_APP_RPC_URL);
export const Wallet = new BeaconWallet({
  name: process.env.REACT_APP_WALLET_NAME,
});

export const getAccount = async () => {
  try {
    const activeAccount = await Wallet.client.getActiveAccount();
    if (activeAccount) {
      Tezos.setWalletProvider(Wallet);
      return { result: true, address: activeAccount.address };
    } else return { result: false, address: null };
  } catch (error) {
    return { result: false, error };
  }
};

export const logIn = () =>
  new Promise(async (resolve, reject) => {
    await Wallet.requestPermissions({
      network: {
        type: "granadanet",
      },
    });
    Tezos.setWalletProvider(Wallet);
    resolve();
  });

// Contract Interaction
export const registerUser = async (bio, name) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.register(bio, name).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const updateProfile = async (bio, name) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.update_profile(bio, name).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const fundingBlockify = async ({
  actions,
  description,
  image,
  latitude,
  legal_statements,
  longitude,
  slug,
  target_amount,
  thankyou,
  title,
}) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) =>
        contract.methods
          .funding_blockify(
            actions,
            description,
            image,
            latitude,
            legal_statements,
            longitude,
            slug,
            target_amount,
            thankyou,
            title
          )
          .send()
      )
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const donate = async (amount) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.donate().send({ amount }))
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const downVote = async (slug) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.downvote(String(slug)).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const upVote = async (slug) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.upvote(String(slug)).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const claimBlockAmount = async (slug) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.claim_block_amount(String(slug)).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const withdrawBack = async (mutez) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.withdraw_back(parseInt(mutez)).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const vote = async (mutez, slug) => {
  try {
    const hash = await Tezos.wallet
      .at(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((contract) => contract.methods.vote(parseInt(mutez), String(slug)).send())
      .then((op) => op.confirmation(1).then(() => op.opHash));
    return { result: true, message: hash };
  } catch (error) {
    return { result: false, message: error };
  }
};

export const getBalance = () => {
  try {
    Tezos.tz
      .getBalance(process.env.REACT_APP_CONTRACT_ADDRESS)
      .then((x) => console.log(x, parseFloat(x) / 1000000));
  } catch (error) {
    console.log(error);
  }
};

// API Calls
export const getUser = async (address) => {
  try {
    const body = await axios.get(
      process.env.REACT_APP_API_URL +
        "/contracts/" +
        process.env.REACT_APP_CONTRACT_ADDRESS +
        "/bigmaps/profiles/keys/" +
        address
    );
    return body.data.value;
  } catch (error) {
    return error;
  }
};

export const getBlock = async (address) => {
  try {
    const body = await axios.get(
      process.env.REACT_APP_API_URL +
        "/contracts/" +
        process.env.REACT_APP_CONTRACT_ADDRESS +
        "/bigmaps/blocks/keys/" +
        address
    );
    console.log(body.data.blocks);
    return body.data.blocks;
  } catch (error) {
    return error;
  }
};

export const getAllBlocks = async () => {
  try {
    const body = await axios.get(
      process.env.REACT_APP_API_URL +
        "/contracts/" +
        process.env.REACT_APP_CONTRACT_ADDRESS +
        "/bigmaps/blocks/keys/"
    );
    console.log(body.data.blocks);
    return body.data.blocks;
  } catch (error) {
    return error;
  }
};
