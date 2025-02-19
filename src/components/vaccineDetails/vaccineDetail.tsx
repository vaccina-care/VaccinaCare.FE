import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function VaccineDetail() {
  return (
    <div className="space-y-6">
      <Card className="p-0 overflow-hidden" id="section1">
        <div className="bg-blue-800 text-white p-4 text-lg font-semibold">1. Thông tin vắc xin</div>
        <div className="p-6 space-y-6">
          <div>
            <p className="mb-4">
              Vắc xin Qdenga là chế phẩm sinh học đặc biệt có khả năng phòng bệnh sốt Skibidi
              do virus NichGa gây ra, có khả năng bảo vệ chống lại cả 4 nhóm huyết thanh của virus dengue, bao gồm
              DEN-1, DEN-2, DEN-3 và DEN-4, được chỉ định tiêm cho người từ 4 tuổi trở lên với hiệu lực bảo vệ hơn 80%
              nguy cơ mắc bệnh do 4 tuýp virus Dengue và trên 90% nguy cơ nhập viện, mắc bệnh nặng và biến chứng nguy
              hiểm do bệnh sốt xuất huyết gây ra.
            </p>
          </div>

          <div>
            <h2 className="text-blue-700 text-xl font-semibold mb-3">Nguồn gốc vắc xin Skibidi</h2>
            <p className="text-gray-700">
              Vắc xin Qdenga là vắc xin sống giảm độc lực được nghiên cứu, phát triển và sản xuất bởi Hãng vắc xin và
              dược phẩm Takeda – Nhật Bản, xuất xứ tại Đức.
            </p>
          </div>

          <div>
            <h2 className="text-blue-700 text-xl font-semibold mb-3">Đường tiêm</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Sau khi hoàn nguyên hoàn toàn vắc xin đông khô với chất pha loãng (dung môi), Qdenga nên được tiêm dưới
                da, tốt nhất là ở cánh tay trên ở vùng cơ delta.
              </li>
              <li>Qdenga không được tiêm vào mạch, không được tiêm trong da hoặc tiêm bắp.</li>
              <li>
                Không nên trộn vắc xin trong cùng một ống tiêm với bất kỳ loại vắc xin hoặc sản phẩm thuốc tiêm nào
                khác.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-blue-700 text-xl font-semibold mb-3">Chống chỉ định</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Quá mẫn cảm với hoạt chất hoặc với bất kỳ tá được nào hoặc quá mẫn cảm với liều Qdenga trước đó</li>
              <li>
                Những người bị suy giảm miễn dịch bẩm sinh hoặc mắc phải, bao gồm sử dụng các liệu pháp ức chế miễn dịch
                như hóa trị hoặc dùng corticosteroid toàn thân liều cao (ví dụ: với liều 20mg/ngày hoặc liều tương đương
                với prednisone 2 mg/kg/ngày trong vòng 2 tuần trở lên) trong vòng 4 tuần trước khi tiêm chủng, tương tự
                như với các vắc xin sống giảm độc lực khác
              </li>
              <li>
                Những người nhiễm HIV có triệu chứng hoặc nhiễm HIV không có triệu chứng kèm theo bằng chứng suy giảm
                chức năng hệ miễn dịch
              </li>
              <li>Phụ nữ có thai</li>
              <li>Phụ nữ cho con bú</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" id="section2">
        <div className="bg-blue-800 text-white p-4 text-lg font-semibold">2. Đối tượng</div>
        <div className="p-6">
          <p className="text-gray-700">
            Vắc xin Qdenga được chỉ định phòng ngừa bệnh sốt xuất huyết cho bất kỳ loại huyết thanh virus sốt xuất huyết
            nào gây ra ở những người từ 4 tuổi trở lên.
          </p>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" id="section3">
        <div className="bg-blue-800 text-white p-4 text-lg font-semibold">3. Phác đồ, lịch tiêm</div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">Người từ 4 tuổi trở lên, áp dụng lịch tiêm 2 mũi:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Mũi 1: lần tiêm đầu tiên trong độ tuổi.</li>
            <li>Mũi 2: cách mũi đầu tiên 3 tháng.</li>
          </ul>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" id="section4">
        <div className="bg-blue-800 text-white p-4 text-lg font-semibold">4. Phản ứng sau tiêm</div>
        <div className="p-6 space-y-4">
          <p className="text-gray-700">
            Giống như tất cả các loại vắc xin/thuốc khi được đưa vào cơ thể để chống lại virus/vi khuẩn, người được tiêm
            chủng có khả năng gặp phải các phản ứng sau tiêm tại chỗ hoặc toàn thân, thường nhẹ không đáng lo và sẽ
            nhanh khỏi như:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Triệu chứng tại chỗ tiêm: đau tại chỗ tiêm, đau cơ, ban đỏ</li>
            <li>Triệu chứng toàn thân: nhức đầu, khó chịu, suy nhược, sốt</li>
          </ul>
          <p className="text-gray-700">
            Những tác dụng phụ này thường nhẹ, kéo dài từ 1 – 3 ngày và và ít gặp hơn sau mũi tiêm thứ hai.
          </p>
        </div>
      </Card>

      <Card className="p-0 overflow-hidden" id="section5">
        <div className="bg-blue-800 text-white p-4 text-lg font-semibold">5. Tình trạng vắc xin</div>
        <div className="p-6 text-center">
          <p className="text-gray-700 mb-4">
            Để tham khảo thông tin tình trạng vắc xin, Quý khách vui lòng truy cập bảng giá.
          </p>
          <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full">
            CLICK ĐỂ XEM BẢNG GIÁ
          </Button>
        </div>
      </Card>
    </div>
  )
}

