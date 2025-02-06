interface ProductCardProps {
  title: string
  source: string
  price: number
  onSelect: () => void
}

import backgroundImg from "@/assets/images/vaccine3.png";

export function ProductCard({ title, source, price, onSelect }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border">
      {/* <div className="bg-primary-light/20 rounded-lg p-4 mb-4"> */}
      <div className="rounded-lg p-4 mb-4" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h3 className="text-primary font-medium text-lg">{title}</h3>
        <p className="text-sm text-text-secondary mt-1">{source}</p>
        <div className="flex items-center gap-2 mt-4">
          <span className="text-primary font-medium">{price.toLocaleString()} VND</span>
        </div>
      </div>
      <div>
        <p className="text-sm text-text-secondary mb-1 ml-4">Phòng bệnh:</p>
        <p className="text-sm text-text-primary mb-4 ml-4">bệnh Yapping</p>
        <button
          onClick={onSelect}
          // className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary transition-colors"
          className="w-40 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors mx-auto block"
        >
          Chọn
        </button>
      </div>
    </div>
  )
}
