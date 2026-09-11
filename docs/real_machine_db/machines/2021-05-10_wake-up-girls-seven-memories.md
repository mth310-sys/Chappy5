# パチスロ Wake Up, Girls！Seven Memories

No: 1410
machineName: パチスロ Wake Up, Girls！Seven Memories
machineNameVariants: Wake Up, Girls！Seven Memories / WUG / WUG！ / S Wake Up, Girls! Seven Memories
manufacturer: カルミナ（製造: ネット株式会社）
releaseDate: 2021-05-10
formalModelName: S Wake Up， Girls！NC
certificationNumber: UNVERIFIED_AFTER_RESEARCH

generation: 6.1号機
systemType: AT / 擬似ボーナスループ / 技術介入要素あり

## identity / release
- カルミナ公式製品ページで2021年5月発売、型式名 `S Wake Up， Girls！NC`、製造 `ネット株式会社` を確認。
- HAZUSE、1geki、なな徹、K-Navi等でホール導入開始日2021-05-10が一致。
- HAZUSEの機種URLには `machine_code=0S1513` が付与されているが、現存ページ本文でこれを検定番号と明示する独立記載を固定できなかったため、本DBの certificationNumber には推測転記せず `UNVERIFIED_AFTER_RESEARCH` とした。
- reliability: OFFICIAL / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 98.0% |
| 2 | 99.2% |
| 3 | 100.5% |
| 4 | 103.9% |
| 5 | 107.4% |
| 6 | 110.1% |
- 小役取りこぼしなし＋ボーナス中技術介入完全成功時は設定1でも約101%超との解析あり。通常市場掲載値と完全攻略値は定義を分離する。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ARENA ROULETTE | WUG！LIVE | Wake Up, Bonus！ |
|---:|---:|---:|---:|
| 1 | 1/318 | 1/541 | 1/774 |
| 2 | 1/308 | 1/521 | 1/755 |
| 3 | 1/298 | 1/501 | 1/735 |
| 4 | 1/284 | 1/476 | 1/705 |
| 5 | 1/271 | 1/454 | 1/674 |
| 6 | 1/253 | 1/424 | 1/625 |
- ARENA ROULETTEがWUG！LIVE / Wake Up, Bonus！の報酬分岐となるため、初当たり比較の代表値として併記。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約41.1G/50枚。
- reliability: ANALYSIS_HIGH

## netIncrease
- 約3.0枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- Wake Up, Bonus！: 約60枚。
- WUG！LIVE: ボーナスループ型AT、突入時平均獲得期待枚数 約650枚。
- SUPER BIG BONUS!: 約150枚（50G）。
- BIG BONUS!: 約152〜172枚。JACゲーム2回または小役ゲーム40G消化、リプレイハズシで獲得枚数増加。
- REG BONUS!: 約60枚（20G）。
- Polaris BONUS!: 約180枚（60G）。ボーナス7連目に突入し、最終ゲームの7 Girls Chance成功率50%で高継続WUG！LIVEへ。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はCZ「WUG！チャレンジ」、規定G数経由の「アイドルの祭典」等からARENA ROULETTEを目指す。
- 有利区間移行後、通常時最大777G+αでARENA ROULETTEが発動。
- WUG！チャレンジのCZ天井は有利区間移行時に決定。設定1公開値は50G 2.34% / 100G 23.44% / 250G 0.78% / 500G 73.44%。
- 200/400/600Gはアイドルの祭典の主要ゾーン。
- WUG！LIVEは平均約650枚、ボーナス7連目Polaris BONUS!到達時は累計約1000枚が目安で、7 Girls Chance成功時はさらに約1000枚を狙える構造。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_CZ_CEILING
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は有利区間・通常天井・ごめんね！ランク・神様ポイント・CZ追加アイコンをRESET。
- 朝一ステージは島田真夢ステージ。
- reliability: ANALYSIS_HIGH

### carryOverBehavior
- 据え置きでは有利区間・通常天井・ごめんね！ランク・神様ポイント・CZ追加アイコンを内部的にCARRY_OVER。
- 液晶上は見た目上リセットされた形になるため、画面だけでは設定変更/据え置き判別不可。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 設定を変更せず電源OFF→ONのみの場合、有利区間・天井・ごめんね！ランク・神様ポイント・CZ追加アイコンをCARRY_OVER。
- ステージ表示は島田真夢ステージとなる。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更時: 有利区間移行後の天井進行をRESET。
- 据え置き/純電断: 天井進行をCARRY_OVER。
- reliability: ANALYSIS_HIGH

### ceilingAfterReset
- 通常天井は有利区間移行後777G+α。設定変更後も同じ新規有利区間の天井契約で、設定変更専用の固定短縮天井は確認できない。
- CZ「WUG！チャレンジ」には有利区間移行時に決まる別天井があり、設定1では50G 2.34% / 100G 23.44% / 250G 0.78% / 500G 73.44%。設定変更は有利区間RESETを伴うためこの抽選を新たに受ける。
- reliability: ANALYSIS_HIGH

### modeAfterReset
- 本機には一般的なA/B/天国型の設定変更専用モード振り分け表として公開されたものは確認できない。
- ごめんね！ランクは設定変更でRESET、据え置き/純電断ではCARRY_OVER。ランクが高いほど次回ARENA ROULETTEでWUG！LIVE当選期待度が上がる。
- 設定変更時のごめんね！ランク初期振り分け数値は、機種名・型式・カルミナ/ネット・リセット/朝一/設定変更/ランク振り分け等で再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### stateAfterReset
- 設定変更時は内部状態をRESET、電源OFF→ONのみでは内部状態をCARRY_OVERとの解析で一致。
- 神様ポイントおよびCZ追加アイコンも設定変更でRESET、純電断でCARRY_OVER。
- reliability: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時は有利区間RESET、純電断ではCARRY_OVER。
- 通常時は有利区間ランプ点灯型。ランプはWUG！ナビゲーション開始時に点灯し、設定変更時、WUB終了時の一部、アンコールモード終了時などで消灯。
- reliability: ANALYSIS_HIGH

### resetBenefits
- 設定変更で新規有利区間へ移行し、CZ天井を再抽選。設定1公開値では50Gまたは100G選択の合計が25.78%で、早いCZ天井が選ばれる可能性がある。
- 一方で、ごめんね！ランク・神様ポイント・CZ追加アイコンなど前日から蓄積した救済/優遇要素はRESETされるため、状況によっては据え置きより不利になり得る。
- reliability: ANALYSIS_HIGH

### resetPenalties
- 前日のごめんね！ランク、神様ポイント、CZ追加アイコン、天井進行を失う。
- 設定変更専用の定量的なマイナス期待値/不利率は `NO_PUBLIC_RESET_SPECIFIC_PENALTY_RATE_FOUND_AFTER_RESEARCH`。

### resetDetection
- 朝一の液晶画面は設定変更/据え置きとも見た目上差がなく、液晶だけでは判別不可。
- 通常時有利区間ランプ点灯型のため、未対策なら朝一ランプ消灯=設定変更濃厚、点灯=据え置き濃厚。
- 据え置きでCZ追加アイコンを持ち越していた場合、初回CZ突入時にキャラランプ点灯状態から始まり、据え置き判別材料になる場合がある。
- 本機固有のリールガックン条件/発生率は、正式型式・メーカー・朝一/設定変更/ガックン等で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- reliability: ANALYSIS_HIGH / UNVERIFIED_AFTER_RESEARCH

### numericResetData
- 通常天井: 有利区間移行後777G+α → ARENA ROULETTE。
- 有利区間移行時CZ天井振り分け（設定1）: 50G 2.34% / 100G 23.44% / 250G 0.78% / 500G 73.44%。
- 100G以内CZ天井選択合計（設定1）: 25.78%。
- 設定変更専用ごめんね！ランク初期振り分け: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 検定番号はHAZUSE URL上の `machine_code=0S1513` が存在するが、現存本文で検定番号として明記された独立根拠を今回固定できないためcanonicalへ採用していない。
- 出玉率98.0%は通常市場掲載値。技術介入完全成功時の設定1約101%超とは条件が異なるためCONFLICTではなく定義分離。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用ごめんね！ランク初期振り分け: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-12
- https://carmina-gaming.co.jp/product/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-wake-up-girls%EF%BC%81-seven-memories/
- https://carmina-gaming.co.jp/product/release/2021/
- https://data.hazuse.com/?detail_id=166737&genre=202&machine_code=0S1513
- https://data.hazuse.com/?genre=207&machine_code=0S1513
- https://1geki.jp/slot/s_wakeupgirls/
- https://1geki.jp/slot/s_wakeupgirls/1/
- https://nana-press.com/kaiseki/machine/122/
- https://nana-press.com/kaiseki/machine/122/3609/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/03/kr01.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/carmina_slot/03/tj09.php
- https://chonborista.com/slot/carmina/134468/
- https://www.slopachi-quest.com/article/s-wake-up-girls-seven-memories-tenjou/
- https://hisshobon.news/column/1394/

recordStatus: COMPLETE_CORE_RESET_V07
