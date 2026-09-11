更新日: 2026-09-11

## 現在地点
- recordCount: **1350**
- latestRecordAdded: **押忍！サラリーマン番長2 — No.1350**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-04-20_salaryman-banchou2.md`
- chronologicalFrontier: **2020-04-20**
- frontierLatestMachine: **押忍！サラリーマン番長2 — No.1350**
- schema: **resetBehavior v0.7**
- status: **2020-04-20_GROUP_OPEN_1_OF_2_KNOWN_CANDIDATES_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1349を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として継続。
- 最新handoffの次の未処理候補 **押忍！サラリーマン番長2** をNo.1350として追加。
- 2020-04-20群は **押忍！サラリーマン番長2 / サンダーVライトニング** の2候補を本線として監査中。サンダーVライトニング未処理のため群はOPEN。
- ALL7等に当初4/20予定として残る「回胴黙示録カイジ～沼～」は実導入2020-10-19へ延期確認済みのため4/20本線には入れない。

## No.1350 — 押忍！サラリーマン番長2
- path: `docs/real_machine_db/machines/2020-04-20_salaryman-banchou2.md`
- manufacturer: **大都技研**
- formalModel: **S押忍！サラリーマン番長2A2**
- certificationNumber: **9S1687**
- releaseDate canonical: **2020-04-20**
- generation/system: **6号機 / AT / 疑似ボーナス + 差枚数管理AT**
- payoutRate: **97.8 / 99.2 / 101.0 / 104.1 / 108.2 / 112.6%**
- initial hit combined: **1/346.6 / 322.2 / 316.7 / 278.9 / 291.9 / 212.5**
- base: **約50.5G/50枚**
- netIncrease: **約3.0枚/G**
- basicPayout: **番長ボーナス20G開始→最大30G+α / 頂RUSH 1セット100枚+α**
- ceiling: **通常A 約799G / 通常B 約561G / 天国99G**
- coreStatus: **COMPLETE_CORE**
- overallReliability: **ANALYSIS_HIGH_WITH_INDUSTRY_CONFIRMATION**

### resetBehavior v0.7 — No.1350
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE**
- **設定変更=非有利区間へ移行 / 天井RESET / 内部状態RESET / 有利区間RESET**。
- **据え置き・電源OFF→ON=天井 / 内部状態 / 有利区間CARRY_OVER** をcanonical採用。
- 設定変更時は通常A / 通常B / 天国を再抽選。公開モード移行率は設定変更時・AT非当選BB終了時・AT終了時に共通する解析値として保存。
- 設定1のモード率: 通常A76.6 / 通常B12.1 / 天国11.3%。設定6: 50.0 / 31.6 / 18.4%。全設定表は機種レコードへ保存。
- 通常時は有利区間ランプ常時消灯タイプのため、朝一消灯では変更判別不可。
- ガックンは実戦上判別不可とする解析あり。発生率の公開固定値は未確認。
- 朝一初当たりまで高確B移行は内部ハマリGを参照。**当日側の101/201/301/401/501/601G周期で雫ステージ移行ならリセット寄り、前日+当日の宵越し周期側で一致なら据え置き寄り**という変更判別材料を保存。
- リセット専用短縮天井・専用初当たり率は確認されず、特別なリセット恩恵も主要攻略では「特になし」。
- 設定変更直後の通常/高確A等の専用状態振り分け、朝一即前兆の専用発生率は再探索後もPUBLIC_VALUE_NOT_FOUND。

## No.1350 data-quality notes
- スロパチクエスト旧表は電源OFF/ON側の天井・状態を「再抽選」とする一方、期待値見える化の朝一専用解析は電断据え置きで天井/内部状態/有利区間を引き継ぐと明記し、宵越しG参照の雫ステージ移行による据え置き判別まで示す。1geki当時ページは電断挙動を調査中。
- 具体的な宵越し挙動と整合するため **CARRY_OVERをcanonical** とし、旧「再抽選」表記は `CONFLICT_LEGACY_RESET_TABLE` として機種レコード内に保持。

## 2020-04-20群監査
- 1. 押忍！サラリーマン番長2 — **No.1350 / 処理済み**
- 2. サンダーVライトニング — **未処理 / 次候補**
- 回胴黙示録カイジ～沼～ — 当初4/20予定資料あり、実導入は2020-10-19へ延期済み。本群から除外して10月到達時に戻す。
- 群判定: **OPEN**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次の未formalized候補は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan4.md`（やったネ！はるみちゃん4）。
- その次は `docs/real_machine_db/machines/2007-04-15_yattane-harumi-chan-30.md`（やったネ！はるみちゃん-30）。
- 既存COMPLETE_COREは崩さずreset側のみv0.7で正式化する。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1350を再取得。
2. **2020-04-20群の「サンダーVライトニング」をNo.1351候補として処理する。**
3. 同日全メーカー・別型式・別スペック・PB・延期機を再監査して4/20群CLOSED可否を判定。
4. 4/20群CLOSED後、次の実導入日へ時系列前進。
5. 遡及QAは `2007-04-15_yattane-harumi-chan4.md` から継続。

## 主要出典 — 取得日 2026-09-11
### No.1350
- PiDEA X（大都製品サイト公開）: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8C%E6%8A%BC%E5%BF%8D%E3%82%B5%E3%83%A9%E3%83%AA%E3%83%BC%E3%83%9E%E3%83%B3%E7%95%AA%E9%95%B72%E3%80%8D%E8%A3%BD%E5%93%81%E3%82%B5%E3%82%A4%E3%83%88%E3%83%BBpv%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94
- グリーンべると: https://web-greenbelt.jp/post-37592/
- PiDEA X（4/20導入）: https://www.pidea.jp/articles/1587342946
- HAZUSE: https://hazuse.com/machine/pachislot/9S1687/
- 必勝本: https://p.hisshobon.jp/machine/3505/1/77354
- 期待値見える化 朝一: https://slotjin.com/slot/saraban2-reset/
- 期待値見える化 note: https://note.com/dakuo_slot/n/n0e798a7ba93d
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/106359/
- スロパチクエスト: https://www.slopachi-quest.com/article/salaryman-bantyo2-tennjou/
- 1geki: https://1geki.jp/slot/s_saraban2/3/

### 4/20群監査
- スロパチクエスト 2020導入日一覧: https://www.slopachi-quest.com/article/2020-dounyuukishu/
- ALL7 2020年4月予定一覧: https://www.all7.jp/plans/index/2020/04
- サミーネットワークス（カイジ沼・2020年10月導入確認）: https://www.sammy-net.jp/news/2020/11/777townnet-37.html
