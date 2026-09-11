更新日: 2026-09-11

## 現在地点
- recordCount: **1351**
- latestRecordAdded: **サンダーVライトニング — No.1351**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-04-20_thunder-v-lightning.md`
- chronologicalFrontier: **2020-04-20**
- frontierLatestMachine: **サンダーVライトニング — No.1351**
- schema: **resetBehavior v0.7**
- status: **2020-04-20_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1350を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 2020-04-20群の未処理候補 **サンダーVライトニング** をNo.1351として追加。
- 遊技日本、HAZUSE、スロパチクエスト、SLOT HACK、1geki、K-Navi、PiDEA Xを横断し、性能コアとresetBehavior v0.7を保存。
- 2020-04-20群は **押忍！サラリーマン番長2 / サンダーVライトニング** の2機を処理済み。回胴黙示録カイジ～沼～は当初4/20予定から実導入2020-10-19へ延期済みとして除外。現時点の横断監査で追加の同日実導入パチスロを確認できず、群をCLOSED。
- 遡及QAは `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）を再探索し、既存 `COMPLETE_CORE` を維持したままreset側を `PARTIAL_RESEARCH_EXHAUSTED` へ正式化。

## No.1351 — サンダーVライトニング
- path: `docs/real_machine_db/machines/2020-04-20_thunder-v-lightning.md`
- manufacturer: **アクロス**
- formalModel: **S／サンダーVライトニング／TH**
- certificationNumber: **9S1588**
- releaseDate canonical: **2020-04-20**
- generation/system: **6号機 / ノーマルA / 技術介入あり / 4段階設定**
- payoutRate market: **98.0 / 100.1 / 103.5 / 107.0%（設定1/2/5/6）**
- payoutRate full攻略: **99.5 / 101.5 / 105.1 / 108.5%**
- BIG: **1/277.7 / 277.7 / 264.3 / 256.0**
- REG: **1/392.4 / 322.8 / 288.7 / 256.0**
- combined: **1/162.6 / 149.3 / 138.0 / 128.0**
- base: **約42.5G/50枚**
- basicPayout: **BIG最大251枚 / REG最大104枚**
- ceiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- overallReliability: **ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION**

### resetBehavior v0.7 — No.1351
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**
- ノーマルタイプで通常時ゲーム数天井非搭載のため、天井G数・短縮天井はNOT_APPLICABLE。
- SLOT HACKは設定変更時 **「特に影響はない」** と整理。朝一専用高確/専用モード/初当たり優遇等は確認されず。
- 1gekiは設定変更時・電源OFF→ON時とも **RIZIN ZONEの扱いを「現在調査中」** と明記。
- よってRIZIN ZONE残りG/状態の設定変更・据え置き・純電断時処理を一般的ノーマル機挙動から推測せずUNVERIFIED保持。
- 本機固有のガックン・初期出目・ランプ等の変更確定条件も十分再探索後なおPUBLIC_VALUE_NOT_FOUND。
- 有利区間は6号機世代だが、本機の朝一客行動を左右する主要ゲーム性としての有利区間リセット契約はNOT_APPLICABLE_TO_GAMEPLAY扱い。

## 2020-04-20群監査
- 1. 押忍！サラリーマン番長2 — **No.1350 / 処理済み**
- 2. サンダーVライトニング — **No.1351 / 処理済み**
- 回胴黙示録カイジ～沼～ — 当初4/20予定資料あり、実導入2020-10-19へ延期。4/20群から除外。
- 群判定: **CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- `2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）を処理済み。
- `coreStatus: COMPLETE_CORE` は維持。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED**。
- 設定変更/据え置き/純電断時のMRT残りG・内部RT状態、ガックン等はメーカー公式、当時業界、パチマガスロマガ、HAZUSE、旧DB、後年回顧まで再探索しても本機固有契約を固定できず、一般的5号機RT挙動から補完していない。
- 次の未formalized候補: `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。

## 次回本線の再開地点
- 2020-04-20群はCLOSED。
- 次の明確な導入日は **2020-05-11**。
- 現時点で確認済み候補:
  1. **パチスロ モンキーターンIV** — 山佐 / 2020-05-11
  2. **Sヤッターマン絶対正義** — サンスリー / 2020-05-11
  3. **パチスロ ダイナマイトキング極** — D-light / 2020-05-11
- 次回は最新mainを再同期後、5/11群を全メーカー・別型式・別スペック・PB・延期機まで横断監査し、最初の未処理候補を **No.1352** として処理する。現状の先頭候補は **パチスロ モンキーターンIV**。
- 5/18群にはハイドラ-30 / ビッグシオ-30 / 沖ドキ！2-30 / SOZ1-01が確認できるため、5/11群CLOSED後に順次前進する。

## 主要出典 — 取得日 2026-09-11
### No.1351
- 遊技日本（4/20導入）: https://yugi-nippon.com/pachinko-new-machine/post-34611/
- HAZUSE: https://hazuse.com/machine/pachislot/9S1588/
- スロパチクエスト: https://www.slopachi-quest.com/article/thunder-vlightning-settei/
- SLOT HACK: https://slothack.net/matome/8119/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_thunderv_lg/3/
- K-Navi: https://p-kn.com/slot/3408/
- PiDEA X: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E8%A9%95%E4%BE%A1%E3%80%8Es-%E3%82%B5%E3%83%B3%E3%83%80%E3%83%BCv-%E3%83%A9%E3%82%A4%E3%83%88%E3%83%8B%E3%83%B3%E3%82%B0-th%E3%80%8F%E6%A9%9F%E7%A8%AE%E8%A9%95%E4%BE%A1%E5%85%AC%E9%96%8B

### 4/20群監査
- グリーンべると（サラ番2 4/20）: https://web-greenbelt.jp/post-37592/
- 遊技日本（サンダーVライトニング 4/20）: https://yugi-nippon.com/pachinko-new-machine/post-34611/
- サミーネットワークス（カイジ沼 2020年10月導入確認）: https://www.sammy-net.jp/news/2020/11/777townnet-37.html

### 次群 2020-05-11確認
- モンキーターンIV SLOT HACK: https://slothack.net/matome/7629/
- モンキーターンIV 必勝本: https://p.hisshobon.jp/machine/3498/1/78654
- Sヤッターマン絶対正義 K-Navi: https://p-kn.com/kishu/3429/
- ダイナマイトキング極 グリーンべると: https://web-greenbelt.jp/post-36638/
- ダイナマイトキング極 SLOT HACK: https://slothack.net/matome/7625/

### 遡及QA やったネ！はるみちゃん4
- BELLCO公式: https://www.s-bellco.co.jp/products/slot/yama_harumichan/
- グリーンべると: https://web-greenbelt.jp/00004071/
- HAZUSE: https://hazuse.com/i/data/yattane%21harumichan4/top.htm
