import TutorialCard from '@/components/card/TutorialCard';
import { center } from '@styled-system/patterns';

export default function Home() {
  return (
    <div className={center({ height: '100vh' })}>
      <TutorialCard />
    </div>
  );
}
