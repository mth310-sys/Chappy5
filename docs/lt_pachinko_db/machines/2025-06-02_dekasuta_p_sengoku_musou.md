# デカスタP戦国無双

status: COMPLETE_CORE
retrievedAt: 2026-09-22

machineName: デカスタP戦国無双
manufacturer: ニューギン
modelName: P戦国無双HM3
releaseDate: 2025-06-02
modelType: ミドル / デカヘソ / LT

gameType: 一種二種混合・ST型。下位ST「戦国RUSH」100回、LT「超戦国RUSH武将乱舞」162回。
jackpotProbability: 通常時 約1/319.68（資料に1/319.6/1/319.7丸め表記あり）。右打ち中 約1/65.0（大当り+V当り合算）。
initialPayout: 通常時 10R約1500個+LT 1%、5R+戦国RUSH 50%、残り49%は通常（5R）。
rushEntryRate: 51%（LT直行1%を含むRUSH総突入）。
rushContinuationRate: 戦国RUSH 約80%（ST100回継続約79%+残保留引き戻しを加味）。
ltName: 超戦国RUSH武将乱舞
ltEntryRoute: 通常初当りの10R「戦国無双BONUS MAX」1%から直行、または戦国RUSH中大当りの8%（信長バトル等）から発動。
ltEntryRate: 通常時直行1%。戦国RUSH中大当り時8%。通常時全当選を分母とする総LT到達率は直接公表値を確認できず、経路値から独自合算しない。
ltContinuationRate: 約92.4%（ST162回継続約92%+残保留引き戻しを加味）。
ltPayoutStructure: LT中も右打ち出玉構造を維持し、LT中大当り後は下位へ転落せずLT継続。右打ち大当りの27%が約1500個。その他は5R/3R等（約750/450個等）の構成。公開テキストで全比率を安全に復元できないため未確認部分を推測しない。
totalPayoutDistribution: 通常時は約1500個+LT 1%、RUSH 50%、通常49%。右打ちは10R約1500個が27%。払い出し基準。
timeShortening: 戦国RUSH ST100回 / LT ST162回。残保留4個を継続率計算に含む資料あり。
cTimeOrSpecialSystems: デカスタ（メーカー従来比でヘソサイズ約1.5倍）。
ceilingOrSupport: UNVERIFIED_AFTER_RESEARCH（本収集で遊タイム等の直接記載を主要資料から確定せず）。

gameFlow: |
  通常時
   ↓ 初当り
  1%: 約1500個 → LT「超戦国RUSH武将乱舞」
  50%: 戦国RUSH（ST100回）
  49%: 通常へ
   ↓ 戦国RUSH中大当りの8%
  LT「超戦国RUSH武将乱舞」（ST162回、約92.4%）
   ↓ 大当り継続中はLT維持
  終了

notes:
- LT突入時期待出玉 約13,352個という資料値は、LT突入前約2,315個+LT突入時約1,500個+LT突入後期待出玉約9,537個の合算定義。単一大当り出玉とは混同しない。
- P-WORLD/HAZUSE/一撃/業界記事で、通常1%、RUSH中8%、下位約80%、LT約92.4%、ST100/162回の主要構造を照合。
- 一部P-WORLD/HAZUSE注記にLT継続率説明として「ST55回/c時短」の不整合な文言が残るが、同ページ本表および複数独立資料はST162回で一致するため、その注記を採用しない。数値92.4%自体は複数資料一致。

sources:
- https://news.p-world.co.jp/articles/ (情報島記事転載/業界資料: デカスタP戦国無双先行導入記事; 2025-05-14)
- https://p-johojima.jp/news/post-6973/
- https://www.p-world.co.jp/machine/database/10284
- https://hazuse.com/machine/pachinko/PX0292/
- https://1geki.jp/pachinko/p_ds_sngkms/39/
- https://1geki.jp/pachinko/p_ds_sngkms/51/
- https://1geki.jp/pachinko/p_ds_sngkms/53/

confidence: ANALYSIS_HIGH / INDUSTRY cross-checked
missingFields:
- 通常時全当選を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
- 右打ち全振り分けのテキスト化可能な一次表: UNVERIFIED_AFTER_RESEARCH（主要割合のみ保存）
conflicts: none (ST55/c時短注記は同ページ内部不整合として不採用。主要独立資料はST162回で一致)
