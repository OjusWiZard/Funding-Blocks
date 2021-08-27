import smartpy as sp


class AmIAlone(sp.Contract):
    def __init__(self):
        """
        Initialize the contract.
        """
        self.init_type(
            sp.TRecord(
                profiles=sp.TBigMap(
                    sp.TAddress,  # Unique address of the user
                    sp.TRecord(
                        name=sp.TString,  # Name of the user
                        bio=sp.TString,  # Bio of the user
                        donated=sp.TMutez,  # Total amount of donated tokens
                        upvoted=sp.TSet(sp.TString),  # Set of upvoted funding blocks
                        downvoted=sp.TSet(sp.TString),  # Set of downvoted funding blocks
                        voted=sp.TMap(sp.TString, sp.TMutez),  # Map of event names to their voted amounts
                    ),
                ),
                block=sp.TBigMap(
                    sp.TString,  # Funding block slug
                    sp.TRecord(
                        active=sp.TBool,  # Whether the funding block is active
                        title=sp.TString,  # Title of the event
                        description=sp.TString,  # Description of the event
                        location=sp.TString,  # Location of the event
                        image=sp.TString,  # Image of the event
                        target_amount=sp.TMutez,  # Target amount of tokens to be raised
                        deadline=sp.TTimestamp,  # Expected time to get the target amount
                        actions=sp.TString,  # Actions to be taken
                        legal_statements=sp.TString,  # Legal statements
                        thankyou=sp.TString,  # Thank you message
                        author=sp.TAddress,  # Unique address of the user who created the event
                        upvotes=sp.TNat,  # Number of upvotes
                        downvotes=sp.TNat,  # Number of downvotes
                        voters=sp.TMap(sp.TAddress, sp.TMutez),  # Map of addresses to their voted amounts
                        final_amount=sp.TMutez,  # Amount decided by the voters
                    ),
                ),
            )
        )
        self.init(profiles=sp.big_map(), block=sp.big_map())
