import { ParallaxScroll } from '@/components/ui/parallax-scroll';
import { section } from 'motion/react-client';
import React from 'react'

const images = [
    // 1. Rooftop solar installation
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 2. Solar farm aerial view
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 3. Close-up of solar panels
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 4. Solar panels with sunset
    // "https://images.unsplash.com/photo-1508511566112-4c6dc34a3963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 5. Technician installing panels
    // "https://images.unsplash.com/photo-1605160628645-9f61516d1a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=3540&q=80",
  
    // 6. Solar panels on green field
    // "https://images.unsplash.com/photo-1508511566112-4c6dc34a3963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 7. Modern home with solar
    // "https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 8. Industrial solar installation
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    
    // 9. Solar monitoring dashboard
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
  ];


const Gallery = () => {
  return (
     <section>
    <div>
        <div className="section-heading pt-12 ">
          <h2 className="section-title my-6">Our Solar Projects in Action </h2>
          <p className="section-desc">
          Explore our successful solar installations powering homes, businesses, and industries nationwide. Each project showcases our commitment to quality, innovation, and sustainable energy solutions tailored to Sri Lanka's needs.          </p>
          

          
          </div>
          <ParallaxScroll images={images} className="" />
    </div>
    </section>
  )
}

export default Gallery