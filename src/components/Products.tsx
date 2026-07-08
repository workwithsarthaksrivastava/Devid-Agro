import { motion } from "motion/react";
import garlicImage from "../assets/images/fresh_garlic_1783511433877.jpg";
import greenChilliImage from "../assets/images/green_chilli_1783511450202.jpg";

const PRODUCTS = [
  { name: "Potato", category: "Vegetables", description: "High-quality, graded potatoes perfect for bulk retail and culinary processing.", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop" },
  { name: "Onion", category: "Vegetables", description: "Crisp, well-dried onions sourced directly from local farms for extended shelf life.", image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?q=80&w=800&auto=format&fit=crop" },
  { name: "Tomato", category: "Vegetables", description: "Fresh, farm-ripened tomatoes carefully packed to prevent damage during transit.", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop" },
  { name: "Garlic", category: "Vegetables", description: "Aromatic, premium white garlic bulbs carefully selected for robust flavor.", image: garlicImage },
  { name: "Green Chilli", category: "Vegetables", description: "Vibrant, spicy green chillies hand-picked daily for maximum freshness.", image: greenChilliImage },
  { name: "Leafy Vegetables", category: "Vegetables", description: "Crisp, nutrient-rich greens harvested early morning for peak vitality.", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=800&auto=format&fit=crop" },
  { name: "Banana", category: "Fruits", description: "Naturally ripened, premium bananas available in bulk for wholesale markets.", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=800&auto=format&fit=crop" },
  { name: "Apple", category: "Fruits", description: "Crisp and juicy apples, carefully graded and sorted for exceptional quality.", image: "https://images.unsplash.com/photo-1561136594-7f68413baa99?q=80&w=800&auto=format&fit=crop" },
  { name: "Grapes", category: "Fruits", description: "Sweet, fresh grapes handled with care to maintain their perfect bloom.", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=800&auto=format&fit=crop" },
  { name: "Mango", category: "Fruits", description: "Seasonal, hand-picked mangoes known for their rich sweetness and aroma.", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=800&auto=format&fit=crop" },
  { name: "Pineapple", category: "Fruits", description: "Tropical, sweet pineapples harvested at optimal ripeness.", image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=800&auto=format&fit=crop" },
  { name: "Watermelon", category: "Fruits", description: "Refreshing, sweet watermelons perfect for seasonal summer demands.", image: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?q=80&w=800&auto=format&fit=crop" },
];

export function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl lg:text-5xl font-extrabold text-text-dark tracking-tight mb-4"
            >
              Products We Supply
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-text-muted"
            >
              Freshly sourced produce delivered daily. Handpicked from our trusted farmer network.
            </motion.p>
          </div>
        </div>

        {/* 3D-like Interactive Produce Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-gray-100"
            >
              {/* Image with zoom effect */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-accent text-xs font-bold tracking-widest uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="text-white text-2xl font-bold">
                  {product.name}
                </h3>
                
                {/* Reveal on hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300">
                  <p className="text-white/80 text-sm line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
