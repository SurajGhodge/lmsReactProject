import React, { useEffect, useState } from 'react';
import { fetchBranches, addBranch, deleteBranch } from '../../api/branchApi';

function BranchManager() {
  const [branches, setBranches] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => { loadBranches(); }, []);

  const loadBranches = async () => {
    const res = await fetchBranches();
    setBranches(res.data);
  };

  const handleAdd = async () => {
    await addBranch({ name });
    setName('');
    loadBranches();
  };

  return (
    <div className="mt-4">
      <h5>Branch Management</h5>
      <input type="text" className="form-control" placeholder="Branch Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button className="btn btn-success mt-2" onClick={handleAdd}>Add Branch</button>
      <ul className="mt-3">
        {branches.map((b) => (
          <li key={b.id}>{b.name} <button onClick={() => deleteBranch(b.id)} className="btn btn-sm btn-danger ms-2">Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default BranchManager;