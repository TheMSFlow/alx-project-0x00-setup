import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Button" styles={{ size: "small", shape: "rounded-full" }} />

      <Card />
      <Button title="Medium Button" styles={{ size: "medium" }} />

      <Card />
      <Button title="Large Button" styles={{ size: "large", shape: "rounded-sm" }} />
    </div>
  )
}
export default Landing