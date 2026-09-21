# P少女☆歌劇 レヴュースタァライト ラッキートリガー4500

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P少女☆歌劇 レヴュースタァライト ラッキートリガー4500
manufacturer: 豊丸産業
releaseDate: 2025-04-07
modelType: ライトミドル
gameType: 一種二種混合 / ST型RUSH + LT出玉ループ
jackpotProbability: 通常時 1/199.8 / 右打ち中 1/76.2
initialPayout: 2R 約300個（払出）。特図1 50%でトップスタァロード、50%通常。
rushEntryRate: 50%
rushContinuationRate: トップスタァロード 約75%（ST100回+残保留4個、残保留引き戻し込み）
ltName: 追劇
ltEntryRoute: |
  主経路はトップスタァロード中の10R×3（約4500個）5%から追劇へ直行。
  別経路として、RUSH中10%の「追劇10倍ZONE」へ入り、同ZONE中10R×3 50%で追劇。
  同ZONE中10R×2 50%は「追劇獲得チャンス」へ移行し、そこで5%の3000個上乗せ+追劇でも発動する（10%は追劇10倍ZONEへ戻り、85%はRUSHへ）。
ltEntryRate: 通常初当り基準の総LT到達率は直接公表値を確認できず UNVERIFIED。経路別割合は上記の通り。
ltContinuationRate: 追劇中の1500個以上上乗せループ 約52.5%（追劇獲得チャンス込み）。追劇終了後はトップスタァロードへ復帰。
ltPayoutStructure: |
  追劇発動時は最低約4500個（約1500個×3回）を保証。
  その後、約52.5%で約1500個以上の上乗せがループ。
  P-WORLD特図2追劇中振り分け: 10R×2 2.5%→追劇、10R 50%→追劇、5%→追劇10倍ZONE、42.5%→トップスタァロード。
totalPayoutDistribution: |
  特図1: 2R約300個 + トップスタァロード 50% / 2R約300個 + 通常 50%。
  特図2・トップスタァロード中: 10R×3（約4500個）+追劇 5% / 10R約1500個+追劇10倍ZONE 10% / 10R約1500個+トップスタァロード 85%。
  特図2・追劇10倍ZONE中: 10R×3 50%→追劇 / 10R×2 50%→追劇獲得チャンス。
timeShortening: 0回 / 100回+残保留4個 / 特殊状態では時短10000回相当の資料表記あり
cTimeOrSpecialSystems: 追劇10倍ZONE、追劇獲得チャンス。Cタイムではない。
ceilingOrSupport: 遊タイムの搭載根拠なし。
gameFlow: |
  通常時 1/199.8
   ↓ 初当り
  50% → トップスタァロード（ST100回+残4、約75%）
  50% → 通常
   ↓ RUSH中大当り
  5% 4500個 → LT「追劇」
  10% 1500個 → 追劇10倍ZONE → 50% 4500個で追劇 / 50% 3000個+追劇獲得チャンス
   ↓
  追劇：最低4500個保証 + 約52.5%で1500個以上上乗せループ
   ↓ 終了
  トップスタァロードへ復帰
notes: |
  「追劇」は通常の高継続STではなく、最低4500個保証と上乗せループを核にしたLT。約52.5%は追劇中の上乗せ継続率であり、トップスタァロード約75%とは定義が異なる。
  業界一次記事はLT発動条件を3経路に分けて明示。P-WORLDの詳細振り分けと整合する。
  LT突入時期待出玉約16000個超は、突入前出玉等を含む期待値でありLT継続率・単回払出と混同しない。
sources:
  - https://news.p-world.co.jp/articles/29990 (Amusement Japan / 2025-01-16; 業界一次、導入日・基本スペック・LT3経路・最低4500個・52.5%上乗せ)
  - https://www.p-world.co.jp/machine/database/10212 (P-WORLD; 基本スペック・特図1/2詳細振り分け・ゲームフロー)
  - https://p.hisshobon.jp/news/2096 (パチ&スロ必勝本; 1/199.8・RUSH50%/約75%・LT最低4500個・52.5%上乗せ)
  - https://1geki.jp/pachinko/p_revuestarlight_lt/ (一撃; 導入日・型式・基本スペック・期待出玉定義)
confidence: INDUSTRY + ANALYSIS_HIGH
missingFields:
  - 通常初当り基準の総LT到達率: UNVERIFIED（直接公表値未確認。経路割合から独自合算しない）
conflicts: none
