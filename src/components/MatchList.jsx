import MatchCard from './MatchCard';
import Pagination from './Pagination';
import Legend from './Legend';
import React, { useState } from 'react'

function MatchList({ matches }) {
  const [currentRound, setCurrentRound] = useState(1);
  const maxRound = Math.max(...matches.map(match => parseInt(match.round)));
  const totalRounds = maxRound;

  const matchesForCurrentRound = matches.filter(match => match.round == currentRound);

  const changeRound = newRound => {
    if (newRound >= 1 && newRound <= totalRounds) {
      setCurrentRound(newRound);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentRound(newPage);
  };

  return (
    <div className="flex justify-center  min-h-screen bg-gray-100">
      <div className="w-[90%] h-3/5 m-[10px] rounded-2xl border bg-white p-2 shadow-md ">
        <div className="divide-y">
          <div className='flex justify-between items-center pb-1 px-2' >
            <div>Round {currentRound}</div>
            <Pagination currentPage={currentRound} totalPages={totalRounds} onPageChange={handlePageChange} />
          </div>

          <div className='flex justify-between'>
            <div className='w-3/5'>

              <div className='w-5/5'>

                <div className="grid grid-cols-2 gap-0">
                  {matchesForCurrentRound.map(match => (
                    <MatchCard match={match} />
                  ))}
                </div>
              </div>

            </div>
            <div className='w-2/5 pl-32 pt-4'>
              <Legend />
            </div>
          </div>
        </div>

        <div className='my-[40px] flex justify-center'>
          {currentRound !== 1 &&
            <button onClick={() => changeRound(currentRound - 1)} disabled={currentRound === 1} className="bg-lime-600 text-white py-4 px-10 rounded-lg text-xl font-bold mr-5">
              Back to  Round {currentRound - 1}
            </button>
          }
          {currentRound !== totalRounds &&
            <button
              onClick={() => changeRound(currentRound + 1)}
              disabled={currentRound === totalRounds}
              className="bg-lime-500 text-white py-4 px-10 rounded-lg text-xl font-bold"
            >
              Proceed to Round {currentRound + 1}
            </button>
          }
        </div>
      </div>

    </div>
  );
}

export default MatchList;