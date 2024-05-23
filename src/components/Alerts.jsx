import React from 'react'

export default function Alerts() {
  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert" style={{ marginBottom: 0 }}>
        <strong>Attention! </strong> We got something cool for you!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  )
}
