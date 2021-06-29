import React from 'react';
import { Accordion, Button, Card } from 'react-bootstrap'
import { FiPlus } from 'react-icons/fi'

const accordianCard=( ) => {
    return <Accordion defaultActiveKey="0">
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="0"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">What is SolFlare wallet?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <div className="pt-0 text-secondary card-body p-0">SolFlare is a digital wallet which enables you to send, receive or stake your SOL.</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="1"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">Can SolFlare work with other wallets?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <div className="pt-0 text-secondary card-body p-0">We're working hard to add support for multiple hardware wallets and CLI generated wallets.</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="2"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">I lost my password/private key? What can I do?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <div className="pt-0 text-secondary card-body p-0">Call your hypnotherapist, hypnosis therapy will get you back on track!</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="3"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">Does SolFlare support Ledger Nano X?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <div className="pt-0 text-secondary card-body p-0">Yes, it does, although we’ve seen some issues with Microsoft devices, so please be advised that Windows users may encounter some problems when connecting to SolFlare with their Ledger Nano X. This issue has also been acknowledged by Ledger and we’re working on finding a way around it!</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="4"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">Can I stake to multiple validators from the same account?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <div className="pt-0 text-secondary card-body p-0">No, each delegation will have its own staking account. Creating one takes under 1 minute and its very easy on SolFlare.</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="5"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">Can I add SOL to an already existing stake account?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
                <div className="pt-0 text-secondary card-body p-0">No, just create a new staking account for each delegation, even if its to the same validator.</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="6"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">How can I unstake my SOL?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
                <div className="pt-0 text-secondary card-body p-0">
                Just click “UNDELEGATE” in the SolFlare interface and wait for the cooldown period required to make your tokens available for withdrawal. You can use the Solana Beach explorer (https://solanabeach.io) for monitoring the Epochs and check our Solana’s official docs here:https://docs.solana.com/cluster/stake-delegation-and-rewards
                </div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="7"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">Can I stake the entire amount that is in my account?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
                <div className="pt-0 text-secondary card-body p-0">No. Make sure you account for transaction fees by staking less than the maximum amount available.</div>
            </Accordion.Collapse>
        </Card>
        <Card className="ac-card"  >
            <Card.Header  >
                <Accordion.Toggle as={Button} variant="link" eventKey="8"  >
                    <div className="border-bottom-0 d-flex card-header">
                        <h6 className="mb-0 font-weight-bolder mr-auto accrd-cs30-sdf">When will rewards be enabled on Solana?</h6>
                        <button className="btn p-0 shadow-none">
                            <FiPlus />
                        </button>
                    </div>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
                <div className="pt-0 text-secondary card-body p-0">There is no official date yet. When we’ll know, you’ll know!</div>
            </Accordion.Collapse>
        </Card>
          </Accordion>
}
export default accordianCard