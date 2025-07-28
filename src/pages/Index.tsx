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
  // import heroImage from "@/assets/hero-travel.jpg"; // TODO: Add this image to src/assets/hero-travel.jpg
  
  // Styled components for custom styling
  const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
    backgroundColor: '#3b82f6',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
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
  
  const Index = () => {
    return (
      <Box sx={{ minHeight: '100vh', bgcolor: '#f8fafc' }}>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <Container maxWidth="lg">
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 3 }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: '#84cc16' }}>
                  <LocationOn sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h2" component="h1" fontWeight="bold" sx={{ fontSize: { xs: '2.5rem', md: '4rem' } }}>
                  The Travelling Spirit
                </Typography>
              </Stack>
              
              <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 500 }}>
                Tours & Travels
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}>
                A Fresh, Modern Travel Startup That Believes Travel Isn't Just About Places<br />
                <Box component="span" sx={{ color: '#84cc16', fontWeight: 600 }}>
                  It's About Unforgettable Experiences!
                </Box>
              </Typography>
              
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #3b82f6, #1e40af)">
                    <Groups />
                  </ServiceIcon>
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #f97316, #ea580c)">
                    <Favorite />
                  </ServiceIcon>
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #84cc16, #65a30d)">
                    <School />
                  </ServiceIcon>
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #3b82f6, #1e40af)">
                    <Business />
                  </ServiceIcon>
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #f97316, #ea580c)">
                    <Star />
                  </ServiceIcon>
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
                  <ServiceIcon gradientbg="linear-gradient(135deg, #84cc16, #65a30d)">
                    <Schedule />
                  </ServiceIcon>
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
        <Box sx={{ py: 10, bgcolor: '#1e293b' }}>
          <Container maxWidth="md">
            <Box textAlign="center" sx={{ mb: 6 }}>
              <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mb: 2, color: 'white' }}>
                Get In Touch
              </Typography>
              <Box sx={{ width: 96, height: 4, bgcolor: '#84cc16', borderRadius: 1, mx: 'auto' }} />
            </Box>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
              <Card sx={{ bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <Phone sx={{ color: '#84cc16' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>Phone</Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    +91 9687523434
                  </Typography>
                </CardContent>
              </Card>
              
              <Card sx={{ bgcolor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
                    <Email sx={{ color: '#84cc16' }} />
                    <Typography variant="h6" sx={{ color: 'white' }}>Email</Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    surajpt149@gmail.com
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            
            <Box textAlign="center" sx={{ mt: 6 }}>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                Ready to create unforgettable memories? Contact us today!
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  
  export default Index;