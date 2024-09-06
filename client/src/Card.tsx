interface CardProps {
  word: string
}

function Card({ word }: CardProps) {
  return (
    <div className="card">
      { word }
    </div>
  );
};

export { Card };
