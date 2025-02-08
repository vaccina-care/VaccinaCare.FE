import { Search } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = "Tìm kiếm..." }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 border rounded-md w-[300px] text-sm"
      />
      <Search className="h-4 w-4 text-text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
    </div>
  )
}
