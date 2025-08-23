import { Shield, Users, Globe, Award, Heart, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every listing is verified, and our community guidelines ensure safe transactions for everyone.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building connections between neighbors and helping people share resources.'
    },
    {
      icon: Globe,
      title: 'Sustainable Living',
      description: 'By sharing instead of buying, we help reduce waste and promote environmental responsibility.'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Our dedicated support team ensures every rental experience exceeds expectations.'
    }
  ];

  const team = [
    {
      name: 'Rahul Sharma',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: 'Former tech entrepreneur passionate about sustainable living and community building.'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c04b6f19?w=300&h=300&fit=crop&crop=face',
      description: 'Operations expert with 10+ years in marketplace management and customer success.'
    },
    {
      name: 'Arjun Mehta',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Full-stack developer focused on creating seamless user experiences and platform security.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rent Karo</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We're building India's most trusted platform for sharing resources, connecting communities, 
            and making everything accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Rent Karo, we believe that access is more important than ownership. Our mission is to create 
                a platform where people can easily share resources, reduce waste, and build stronger communities.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need a camera for a special event, tools for a home project, or a car for a weekend trip, 
                we connect you with trusted people in your neighborhood who have what you need.
              </p>
              <div className="flex items-center space-x-4">
                <Heart className="w-8 h-8 text-red-500" />
                <span className="text-lg font-semibold text-foreground">Building communities, one rental at a time</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground">The passionate people behind Rent Karo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/90">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25K+</div>
              <div className="text-white/90">Items Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-white/90">Cities</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Rent Karo was born from a simple observation: most of the things we need, we only need occasionally. 
              Our founder, Rahul, needed a professional camera for his sister's wedding but couldn't justify buying 
              one for a single event. After borrowing from a friend, he realized how many people face similar situations.
            </p>
            <p className="mb-6">
              What started as a college project in 2022 has grown into India's leading rental marketplace. We've 
              facilitated thousands of transactions, helped people save money, and reduced environmental waste by 
              promoting a sharing economy.
            </p>
            <p>
              Today, we're proud to serve communities across 15+ cities, with plans to expand nationwide. Our vision 
              remains the same: to make anything accessible to anyone, anywhere in India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;