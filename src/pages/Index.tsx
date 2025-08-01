import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Button, 
    Card, 
    CardContent, 
    Grid,
    Avatar,
    Stack,
    Chip
  } from '@mui/material';
  import { 
    LocationOn, 
    Phone, 
    Email, 
    Groups, 
    Favorite, 
    School, 
    Business, 
    Star, 
    Schedule, 
    Public, 
    Headphones 
  } from '@mui/icons-material';
  import { styled } from '@mui/material/styles';
  
  // Import all images
  import heroImage1 from "../assets/mountain-adventure-ultra-hd.jpg";
  import heroImage2 from "../assets/mountain-balloons-ultra-hd.jpg";
  import heroImage4 from "../assets/mountain-sunrise-ultra-hd.jpg";
  import heroImage5 from "../assets/mountain-sunset-ultra-hd.jpg";
  import heroImage6 from "../assets/mountain-valley-joy-ultra-hd.jpg";
  import heroImage7 from "../assets/family-&-group-tours-travel-spirit.jpg";
  import heroImage8 from "../assets/honeymoon-&-couple-getaways-travel-spirit.jpg";
  import heroImage12 from "../assets/weekend-packages-travel-spirit.jpg";
  import heroImage13 from "../assets/corporate-off-sites-travel-spirit.jpg";
  
  // Array of hero images for carousel
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage4,
    heroImage5,
    heroImage6,
    heroImage7,
    heroImage8,
    heroImage12,
    heroImage13,
  ];
  
  // Styled components for custom styling
  const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#3b82f6',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transition: 'background-image 1s ease-in-out',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(14, 165, 233, 0.6))',
      zIndex: 1,
    },
  }));
  
  const HeroContent = styled(Box)({
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
  });
  
  const GradientButton = styled(Button)<{ gradienttype?: 'travel' | 'adventure' }>(({ gradienttype }) => ({
    background: gradienttype === 'travel' 
      ? 'linear-gradient(135deg, #3b82f6, #1e40af)' 
      : 'linear-gradient(135deg, #f97316, #ea580c)',
    color: 'white',
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 600,
    '&:hover': {
      boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
      transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease',
  }));
  
  const ServiceCard = styled(Card)(({ theme }) => ({
    height: '100%',
    border: 'none',
    boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.4)',
    },
  }));
  
  const ServiceIcon = styled(Avatar)<{ gradientbg?: string }>(({ gradientbg }) => ({
    width: 48,
    height: 48,
    background: gradientbg || 'linear-gradient(135deg, #3b82f6, #1e40af)',
    marginBottom: '16px',
  }));
  
  const SectionDivider = styled(Box)({
    width: 96,
    height: 4,
    background: 'linear-gradient(135deg, #3b82f6, #1e40af)',
    borderRadius: 2,
    margin: '0 auto',
  });
  
  // Custom Typography components with updated fonts
  const HeroTitle = styled(Typography)({
    fontFamily: '"Playfair Display", "Georgia", serif',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  });
  
  const SectionTitle = styled(Typography)({
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 700,
    letterSpacing: '-0.01em',
  });
  
  const BodyText = styled(Typography)({
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.6,
  });
  
  const Index = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Auto-scroll through hero images
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change image every 4 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
        {/* Hero Section */}
        <HeroSection sx={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}>
          <HeroContent>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: '#84cc16', boxShadow: '0 4px 20px rgba(132, 204, 22, 0.3)' }}>
                    <LocationOn sx={{ fontSize: 40 }} />
                  </Avatar>
                </Box>
                <Typography variant="h2" component="h1" sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontFamily: '"Playfair Display", "Georgia", serif',
                  fontWeight: 700,
                  letterSpacing: '-0.02em'
                }}>
                  The Travelling Spirit
                </Typography>
              </Box>
              
              <Typography variant="h4" component="h2" sx={{ 
                mb: 2, 
                fontWeight: 600,
                fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
                letterSpacing: '-0.01em'
              }}>
                Tours & Travels
              </Typography>
              
              <BodyText variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                A Fresh, Modern Travel Startup That Believes Travel Isn't Just About Places<br />
                <Box component="span" sx={{ color: '#84cc16', fontWeight: 600 }}>
                  It's About Unforgettable Experiences!
                </Box>
              </BodyText>
              
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <GradientButton gradienttype="travel" size="large" sx={{ fontSize: '1.125rem', px: 4, py: 1.5 }}>
                  Plan Your Journey
                </GradientButton>
                <GradientButton gradienttype="adventure" size="large" sx={{ fontSize: '1.125rem', px: 4, py: 1.5 }}>
                  Contact Us
                </GradientButton>
              </Stack>
            </Container>
          </HeroContent>
        </HeroSection>
  
        {/* Services Section */}
        <Box sx={{ py: 10 }}>
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mb: 2, color: '#1e293b' }}>
                We specialize in organizing all types of customized travel solutions
              </Typography>
              <SectionDivider />
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #3b82f6, #1e40af)">
                      <Groups />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Family & Group Tours
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Domestic adventures for families and groups
                  </Typography>
                </CardContent>
              </ServiceCard>
              
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #f97316, #ea580c)">
                      <Favorite />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Honeymoon & Couple Getaways
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Romantic escapes for couples
                  </Typography>
                </CardContent>
              </ServiceCard>
              
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #84cc16, #65a30d)">
                      <School />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Educational Trips
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    School & college educational journeys
                  </Typography>
                </CardContent>
              </ServiceCard>
              
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #3b82f6, #1e40af)">
                      <Business />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Corporate Off-Sites
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Team building and corporate events
                  </Typography>
                </CardContent>
              </ServiceCard>
              
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #f97316, #ea580c)">
                      <Star />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Religious Yatras
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Dwarka, Somnath, Chardham, Ayodhya, Kashi & more
                  </Typography>
                </CardContent>
              </ServiceCard>
              
              <ServiceCard>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <ServiceIcon gradientbg="linear-gradient(135deg, #84cc16, #65a30d)">
                      <Schedule />
                    </ServiceIcon>
                  </Box>
                  <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                    Weekend Packages
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All-inclusive short trips from departure to return
                  </Typography>
                </CardContent>
              </ServiceCard>
            </Box>
          </Container>
        </Box>
  
        {/* Why Choose Us Section */}
        <Box sx={{ py: 10, bgcolor: '#f1f5f9' }}>
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mb: 2, color: '#1e293b' }}>
                Why choose us?
              </Typography>
              <Box sx={{ width: 96, height: 4, background: 'linear-gradient(135deg, #f97316, #ea580c)', borderRadius: 1, mx: 'auto' }} />
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 6 }}>
              <Stack spacing={4}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Avatar sx={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)', flexShrink: 0 }}>
                    <Public />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                      Customized Itineraries As Per Your Budget
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tailored travel plans that fit your budget and preferences perfectly.
                    </Typography>
                  </Box>
                </Box>
                
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Avatar sx={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', flexShrink: 0 }}>
                    <Groups />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                      Personalized Planning For Every Group
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Every group is unique, and so is our approach to planning your journey.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
              
              <Stack spacing={4}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Avatar sx={{ background: 'linear-gradient(135deg, #84cc16, #65a30d)', flexShrink: 0 }}>
                    <Business />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                      Complete Travel Support
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Transport, Hotels, Meals - we handle everything for a seamless experience.
                    </Typography>
                  </Box>
                </Box>
                
                <Box display="flex" alignItems="flex-start" gap={2}>
                  <Avatar sx={{ background: 'linear-gradient(135deg, #3b82f6, #1e40af)', flexShrink: 0 }}>
                    <Headphones />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" component="h3" fontWeight="bold" sx={{ mb: 1 }}>
                      24x7 Assistance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Before, during & after the tour - we're always here to help.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>
  
        {/* CTA Section */}
        <Box sx={{ py: 10, background: 'linear-gradient(135deg, #3b82f6, #1e40af)' }}>
          <Container maxWidth="md">
            <Box textAlign="center">
              <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mb: 3, color: 'white' }}>
                Let's Begin Planning A Journey That's Truly Made For You!
              </Typography>
              <Typography variant="h6" sx={{ mb: 2, color: 'rgba(255,255,255,0.9)' }}>
                "The Traveling Spirit - Your Journey, On Your Terms."
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'rgba(255,255,255,0.8)' }}>
                If You Need Any Information About Any Place,<br />
                You Can Contact Us Without Any Hesitation.
              </Typography>
              <GradientButton gradienttype="adventure" size="large" sx={{ fontSize: '1.125rem', px: 4, py: 1.5 }}>
                Start Your Adventure
              </GradientButton>
            </Box>
          </Container>
        </Box>
  
        {/* Contact Section */}
        <Box sx={{ py: 12, bgcolor: '#1e293b' }}>
          <Container maxWidth="lg">
            <Box textAlign="center" sx={{ mb: 8 }}>
              <Typography 
                variant="h2" 
                component="h2" 
                fontWeight="bold" 
                sx={{ 
                  mb: 3, 
                  color: 'white',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ 
                width: { xs: 60, md: 96 }, 
                height: 4, 
                background: 'linear-gradient(90deg, #84cc16, #65a30d)',
                borderRadius: 2, 
                mx: 'auto',
                boxShadow: '0 2px 8px rgba(132, 204, 22, 0.3)'
              }} />
            </Box>
            
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { 
                xs: '1fr', 
                sm: 'repeat(2, 1fr)', 
                lg: 'repeat(3, 1fr)' 
              }, 
              gap: { xs: 3, md: 4 },
              mb: 6
            }}>
              <Card sx={{ 
                bgcolor: 'rgba(255,255,255,0.08)', 
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(132, 204, 22, 0.2)',
                  borderColor: 'rgba(132, 204, 22, 0.3)'
                }
              }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                    <Avatar sx={{ 
                      bgcolor: '#84cc16', 
                      width: 40, 
                      height: 40,
                      boxShadow: '0 4px 12px rgba(132, 204, 22, 0.3)'
                    }}>
                      <Phone sx={{ fontSize: 20 }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Phone
                    </Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ 
                    color: 'rgba(255,255,255,0.95)', 
                    fontWeight: 500,
                    fontSize: { xs: '1rem', md: '1.125rem' }
                  }}>
                    +91 9687523434
                  </Typography>
                </CardContent>
              </Card>
              
              <Card sx={{ 
                bgcolor: 'rgba(255,255,255,0.08)', 
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(132, 204, 22, 0.2)',
                  borderColor: 'rgba(132, 204, 22, 0.3)'
                }
              }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                    <Avatar sx={{ 
                      bgcolor: '#84cc16', 
                      width: 40, 
                      height: 40,
                      boxShadow: '0 4px 12px rgba(132, 204, 22, 0.3)'
                    }}>
                      <Email sx={{ fontSize: 20 }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Email
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ 
                    color: 'rgba(255,255,255,0.95)', 
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    wordBreak: 'break-word'
                  }}>
                    travelingspirittours@gmail.com
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{ 
                bgcolor: 'rgba(255,255,255,0.08)', 
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: 3,
                transition: 'all 0.3s ease',
                gridColumn: { xs: '1', sm: '1 / -1', lg: 'auto' },
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(132, 204, 22, 0.2)',
                  borderColor: 'rgba(132, 204, 22, 0.3)'
                }
              }}>
                <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2.5 }}>
                    <Avatar sx={{ 
                      bgcolor: '#84cc16', 
                      width: 40, 
                      height: 40,
                      boxShadow: '0 4px 12px rgba(132, 204, 22, 0.3)'
                    }}>
                      <LocationOn sx={{ fontSize: 20 }} />
                    </Avatar>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                      Address
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ 
                    color: 'rgba(255,255,255,0.95)', 
                    lineHeight: 1.6,
                    fontWeight: 500,
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}>
                    B - 805 - Fairdeal House,<br />
                    Opp. Jain Dairy, Near. SwatiK Circle,<br />
                    C.G. road, Ahmedabad
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            <Box textAlign="center" sx={{ mt: 8 }}>
              <Typography variant="h6" sx={{ 
                color: 'rgba(255,255,255,0.9)',
                mb: 2,
                fontWeight: 500
              }}>
                Ready to create unforgettable memories?
              </Typography>
              <Typography variant="body1" sx={{ 
                color: 'rgba(255,255,255,0.7)',
                fontSize: { xs: '0.875rem', md: '1rem' }
              }}>
                Contact us today and let's start planning your next adventure!
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default Index;