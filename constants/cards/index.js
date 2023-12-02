import HistoryIcon from '@mui/icons-material/History';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MoodIcon from '@mui/icons-material/Mood';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export const cards = [
    {image: "/images/Rogrigo Cantero.png", title:"Rodrigo Cantero", description:"I am a front-end developer from India.",},
    {image: "/images/Aziz Amir.png", title:"Aziz Amir", description:"Hello! I am a full-stack developer, nice to see you.",},
    {image: "/images/person.png", title:"John Doe", description:"Hola! I am a professional dancer. Do you like it?",},
    {image: "/images/Nelson Djalo.png", title:"Nelson Djalo", description:"Morning! I am a senior manager! Holaaaa",},
]

export const steps = [
    {image: "/sign-in.svg", title:"SignIn/ SignUp", description:"Sign in or sign up to your account to get started and use face detection tool"},
    {image: "/upload.svg", title:"Upload file", description:"Now you can uplaod your image or video to detect any face on them."},
    {image: "/time.svg", title:"Wait processing", description:"Wait until the file will be totally processed."},
    {image: "/download.svg", title:"Download file", description:"Now you can download the face detected image or video and enjoy it."},
]

export const features = [
    {icon: <HistoryIcon />, title: "Historical Background", description: "Initially, face detection relied on traditional image processing techniques like edge detection, template matching, and feature extraction. These methods often involved manually crafted algorithms, which were not very efficient.", oppositeText: "1990s", color: "primary"},    
    {icon: <CodeIcon />, title: "Introduction of Haar Cascades", description: "Viola and Jones introduced a seminal method for face detection using Haar-like features and the AdaBoost algorithm. It involved training a cascade classifier on positive and negative examples to detect faces in images efficiently.", oppositeText: "2001", color: "success"},
    {icon: <PrecisionManufacturingIcon />, title: "Advancements with Machine Learning", description: "The advent of deep learning, especially convolutional neural networks (CNNs), revolutionized face detection. CNN-based architectures like R-CNN, Fast R-CNN, and Faster R-CNN enhanced accuracy and speed significantly.", oppositeText: "2012", color: "warning"},
    {icon: <MoodIcon />, title: "Modern Face Detection Techniques", description: "Single Shot Multibox Detector (SSD), You Only Look Once (YOLO), and RetinaNet are some of the modern approaches that combine object detection and localization. They offer real-time face detection with impressive accuracy.", oppositeText: "2015", color: "error"},
    {icon: <KeyboardDoubleArrowUpIcon />, title: "Working Methodology of Basic Face Detection Code", description: "Convert the input image to grayscale or perform other preprocessing steps to enhance face detection accuracy.Apply a face detection algorithm (like Haar cascades or a pre-trained deep learning model) to identify potential regions containing faces.", oppositeText: "2021", color: "info"},
]