const CommissionCards = () => {
    // Commission data
    const commissionData = [
        {
            id: 1,
            title: "Emotes Pack",
            image: "imgOP/emotes.webp",
            description: "Get a set of 3 high-quality emotes for 9 dollars. Can be used for Twitch, Discord, or other platforms.",
            price: "$9",
            bgColor: '#D850DD'
        },
        {
            id: 2,
            title: "Full Body Drawing",
            image: "imgOP/fullBody.webp",
            description: "Full character design with add-ons for extra characters, complex backgrounds, and shading styles",
            price: "$70",
            bgColor: '#B628BB'
        },
        {
            id: 3,
            title: "Half Body Drawing",
            image: "imgOP/halfBody.webp",
            description: "Hips up drawing with add-ons for extra characters, complex backgrounds, and shading styles.",
            price: "$50",
            bgColor: '#830488'
        },
        {
            id: 4,
            title: "Headshot Drawing",
            image: "imgOP/headshot.webp",
            description: "Headshot drawing with add-ons for extra characters, complex backgrounds, and shading styles.",
            price: "$30",
            bgColor: '#530488'
        },
        {
            id: 5,
            title: "Landscape Painting",
            image: "imgOP/reference.webp",
            description: "A reference sheet of your character with palette, weapons, etc. Poses, backgrounds, and details available.",
            price: "$100",
            bgColor: '#181473'
        },
        {
            id: 6,
            title: "Chibi Drawing",
            image: "imgOP/chibi.webp",
            description: "A cute chibi version of your character. Great for icons, stickers, and fun art pieces.",
            price: "$20",
            bgColor: '#351473ff'
        }
    ];

    const [showSuccess, setShowSuccess] = React.useState(false);
    const [commissionTitle, setCommissionTitle] = React.useState('');
    const [showTerms, setShowTerms] = React.useState(false);
    const [selectedCommission, setSelectedCommission] = React.useState(null);
    
    const handleRequest = (title) => {
        setSelectedCommission(title);
        setShowTerms(true);
    };

    const handleAcceptTerms = () => {
        setShowTerms(false);
        setCommissionTitle(selectedCommission);
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    const handleCloseTerms = () => {
        setShowTerms(false);
        setSelectedCommission(null);
    };

    // Individual Commission Card Component
    const CommissionCard = ({ title, image, description, price, bgColor, onRequest }) => {
        return (
            <div className="comm-card" style={{
                background: bgColor,
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                margin: '15px',
                display: 'flex',
                flexDirection: 'column',
                height: '600px'
            }}>
                <img 
                    src={image} 
                    alt={title} 
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover'
                    }} 
                />
                <div style={{
                    padding: '20px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h3 style={{
                            fontFamily: '"Coustard", serif',
                            
                            fontSize: '24px',
                            color: '#ffffffff',
                            marginBottom: '10px',
                            textAlign: 'center'
                        }}>{title}</h3>
                        <p style={{
                            fontFamily: '"Coustard", serif',
                            color: '#ffffffff',
                            lineHeight: '1.5',
                            marginBottom: '15px',
                            textAlign: 'center'
                        }}>{description}</p>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '15px'
                    }}>
                        <span style={{
                            fontFamily: '"Coustard", serif',
                            color: '#ffffffff',
                            fontSize: '18px',
                            textAlign: 'center',
                            width: '100%'
                        }}>{price}</span>
                    </div>
                    <button 
                        onClick={() => onRequest(title)}
                        style={{
                            backgroundColor: '#ffffffff',
                            color: 'black',
                            border: 'none',
                            padding: '12px',
                            borderRadius: '25px',
                            fontFamily: '"Gochi Hand", cursive',
                            fontSize: '20px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            width: '100%'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c7c7c7ff'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ffffffff'}
                    >
                        Request Commission
                    </button>
                </div>
            </div>
        );
    };

    // TermsPopup Component
    const TermsPopup = ({ isOpen, onClose, onAccept }) => {
        if (!isOpen) return null;

        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                padding: '20px'
            }}>
                <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '30px',
                    maxWidth: '700px',
                    width: '90%',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    position: 'relative'
                }}>
                    <button 
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '15px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            fontSize: '28px',
                            cursor: 'pointer',
                            color: '#53007a',
                            fontWeight: 'bold'
                        }}
                    >
                        ×
                    </button>

                    <h2 style={{
                        fontFamily: '"Gochi Hand", cursive',
                        fontSize: '32px',
                        color: '#53007a',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        Commission Terms & Conditions
                    </h2>

                    <div style={{
                        fontFamily: '"Coustard", serif',
                        fontSize: '16px',
                        lineHeight: '1.6',
                        color: '#333'
                    }}>
                        <p><strong>• Commissions are for personal use only.</strong> Artwork may be used as profile pictures/banners, but may not be used for profit.</p>
                        <p><strong>• I own all rights to the work.</strong> Putting my work into any A/I engine is prohibited.</p>
                        <p><strong>• Listed prices are the base price.</strong> Price may increase depending on complexity.</p>
                        <p><strong>• I have every right to decline any commission.</strong></p>
                    </div>

                    <div style={{
                        marginTop: '25px',
                        textAlign: 'center'
                    }}>
                        <button 
                            onClick={onAccept}
                            style={{
                                backgroundColor: '#9800e0',
                                color: 'white',
                                border: 'none',
                                padding: '12px 30px',
                                borderRadius: '25px',
                                fontFamily: '"Gochi Hand", cursive',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                        >
                            Accept & Request
                        </button>
                    </div>
                </div>
            </div>
        );
    };

return (
    <div className="commission-grid">
        {showSuccess && (
            <div className="success-message">
                Your request for "{commissionTitle}" has been submitted!
            </div>
        )}
        
        <TermsPopup 
            isOpen={showTerms} 
            onClose={handleCloseTerms}
            onAccept={handleAcceptTerms}
        />
        
        {/* Terms Button - spans all columns */}
        <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            marginBottom: '20px'
        }}>
            <button 
                onClick={() => setShowTerms(true)}
                style={{
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    padding: '12px 30px',
                    borderRadius: '25px',
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#53007a';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'white';
                }}
            >
                View Terms & Conditions
            </button>
        </div>

        {/* Remove the extra div wrapper - put cards directly in grid container */}
        {commissionData.map(commission => (
            <CommissionCard
                key={commission.id}
                title={commission.title}
                image={commission.image}
                description={commission.description}
                price={commission.price}
                bgColor={commission.bgColor}
                onRequest={handleRequest}
            />
        ))}
    </div>
);
};

// Render the component
const root = ReactDOM.createRoot(document.getElementById('react-card'));

root.render(<CommissionCards />);
