# デカスタP戦国無双100ver.

machineName: デカスタP戦国無双100ver.
manufacturer: ニューギン
formalModelName: P戦国無双N
releaseDate: 2026-05-11
modelType: 甘デジ / デカスタ / ラッキートリガー搭載
gameType: 1種2種混合 / ST型RUSH / 上位LT ST

jackpotProbability:
- 通常時: 1/100.98
- 右打ち中: 1/40.23（大当り＋V当り合算）

initialPayout:
- 10R: 1000個（払出）
- 5R: 250個（払出）
- 通常初当り振り分け: 1000個+LT 1% / 250個+戦国RUSH 24% / 250個+通常 75%

rushEntryRate:
- 初当り時の戦国RUSHまたはLT突入TOTAL: 25%
- 内訳: 戦国RUSH 24% / LT直行 1%

rushContinuationRate:
- 戦国RUSH: 約80%
- ST60回単体約78%＋残保留4個での引き戻しを加味した公表TOTAL

ltName: 超戦国RUSH武将乱舞
ltEntryRoute:
- 通常初当り10R（1%）からLT直行
- 戦国RUSH中大当りの5%からLTへ昇格
ltEntryRate:
- 通常初当り: LT直行1%
- 戦国RUSH中大当り: LT移行5%
- 通常初当り基準の総LT到達率は直接公表値を確認できないため独自計算しない
ltContinuationRate:
- 約94%
- ST105回単体約93%＋残保留4個での引き戻しを加味した公表TOTAL

ltPayoutStructure:
- 超戦国RUSH武将乱舞中: 1000個+LT継続 25% / 300個+LT継続 75%

totalPayoutDistribution:
- 通常時（特図1）: 1000個+LT 1% / 250個+戦国RUSH 24% / 250個+通常 75%
- 戦国RUSH中（特図2）: 1000個+LT 5% / 1000個+戦国RUSH 20% / 300個+戦国RUSH 75%
- LT中（特図2）: 1000個+LT 25% / 300個+LT 75%
- 出玉は払出表記

timeShortening:
- 戦国RUSH: 60回＋残保留4個
- 超戦国RUSH武将乱舞: 105回＋残保留4個
- 通常転落時: 電サポなし

cTimeOrSpecialSystems:
- 特記すべきc時短等は確認せず
- デカスタ（大型ヘソ）仕様

ceilingOrSupport:
- 遊タイム非搭載

gameFlow: |
  通常時 1/100.98
   ↓ 初当り
  ├─ 75% 250個 → 通常
  ├─ 24% 250個 → 戦国RUSH
  │                 ↓ ST60回＋残保留4個・継続約80%
  │                 ├─ 大当りの5% 1000個 → LT「超戦国RUSH武将乱舞」
  │                 └─ その他 → 戦国RUSH継続
  └─ 1% 1000個 → LT「超戦国RUSH武将乱舞」
                       ↓ ST105回＋残保留4個・継続約94%
                       ├─ 25% 1000個
                       └─ 75% 300個
                       → LT継続

notes:
- LT非搭載の比較機は登録しない。本機は業界資料・複数解析資料でLT搭載を確認。
- 戦国RUSH約80%とLT約94%はいずれも残保留4個込みのTOTAL値。ST本体のみの公表値（約78% / 約93%）と混同しない。
- 右打ち1/40.23は大当りとV当りの合算値。
- 2025年導入の319帯「デカスタP戦国無双」とは別スペック。
- 導入日は資料間に5/7表記と5/11表記がある。複数の導入カレンダー系資料に合わせcanonicalを2026-05-11とし、5/7表記は注記対象とする。

sources:
- https://news.p-world.co.jp/articles/33357/yugitsushin
  - type: INDUSTRY
  - retrievedAt: 2026-09-26
- https://yugi-nippon.com/pachinko-new-machine/post-76588/
  - type: INDUSTRY
  - retrievedAt: 2026-09-26
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/517/kh02.php
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/newgin_pachi/517/kh03.php
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://1geki.jp/pachinko/p_ds_sngkms100/51/
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://www.p-world.co.jp/machine/database/10478
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26
- https://p.hisshobon.jp/machine/4745/1/115266
  - type: ANALYSIS_HIGH
  - retrievedAt: 2026-09-26

confidence: ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: []
conflicts: []
