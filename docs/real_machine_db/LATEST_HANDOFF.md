更新日: 2026-09-13

## 現在地点
- recordCount: **1536**
- latestRecordAdded: **スマスロリノヘブン — No.1536**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-21_smaslot-rino-heaven.md`
- chronologicalFrontier: **2022-11-21**
- frontierLatestMachine: **スマスロリノヘブン — No.1536**
- schema: **resetBehavior v0.7**
- status: **2022-11-21_GROUP_CLOSED_3_OF_3_CANONICAL_ACTUAL_LAUNCH / NEXT_2022-12-05_HEY_ELITE_SALARYMAN_KAGAMI**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1535 `パチスロ 革命機ヴァルヴレイヴ` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前handoff指定どおり `スマスロリノヘブン / LアナザーリノヘブンCC` をNo.1536として性能コア + resetBehavior v0.7で追加。
- 型式 `LアナザーリノヘブンCC`、検定番号 `2S0866`、山佐製造 / 山佐ネクスト発表、2022-11-21実導入を遊技日本・遊技通信・Amusement Japan・グリーンべると・PiDEA等で照合。
- 設定1/2/4/5/6の機械割97.5/98.5/102.3/104.9/107.3%、ボーナス初当り1/252.9→1/202.6、TOTAL 1/117.5→1/96.0、約32.0G/50枚、純増約3.2枚/G。
- BIGは65G・平均約208枚、REGは20G・平均約64枚。天国系は32G以内、裏天国は90%ループかつ全BIG。
- 設定変更は有利区間・天井・内部状態・モードRESET。据え置き/純電断はCARRY_OVER。
- 設定変更時モード振り分けは全設定共通で通常A49.2% / 通常B10.0% / チャンス40.0% / 裏通常A0.4% / 裏通常B0.4%。通常A以外合計50.8%。
- チャンスモードは設定変更後のみ移行可能で200G天井・次回通常B以上確定。通常A/B・裏通常A/Bは999G天井。
- チャンス滞在時を天国移行まで打ち切った公開機械割は設定1 103.7 / 2 104.7 / 4 107.4 / 5 110.9 / 6 114.3%。朝一客行動に影響する公開数値として保存。
- 稼働中の有利区間移行時モード振り分けは通常A28.0% / 通常B5.0% / 引き戻し15.0% / 裏通常A0.4% / 裏通常B0.4% / 裏天国51.2%。設定変更時振り分けとは別系統として保存。
- 設定変更/据え置きは見た目判別不可。朝一200G以内ボーナスはチャンス期待度UPだが確定判別ではない。
- 本機固有ガックン条件/発生率は表記揺れ・型式・メーカー・朝一/設定変更/据え置き/電断/ガックン等を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部二次資料の設定2機械割98.6%に対し、営業資料系・P-WORLD・必勝本系・複数解析は98.5%で一致。98.5%をcanonical、98.6%を転記/丸め差候補CONFLICTとして保持。

## No.1536 — スマスロリノヘブン
- manufacturer: **山佐（製造） / 山佐ネクスト（販売・発表）**
- formalModel: **LアナザーリノヘブンCC**
- inspectionCode: **2S0866**
- releaseDate: **2022-11-21**
- generation/system: **6.5号機 / スマートパチスロ初期 / AT / 完全告知・擬似ボーナス連チャン**
- payoutRate: **97.5 / 98.5 / 102.3 / 104.9 / 107.3%**（設定1/2/4/5/6）
- bonusInitial: **1/252.9 / 1/245.5 / 1/231.9 / 1/216.1 / 1/202.6**
- bonusTotal: **1/117.5 / 1/114.3 / 1/108.5 / 1/101.8 / 1/96.0**
- baseGamesPer50: **約32.0G/50枚**
- netIncrease: **約3.2枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_RESET_MODE_DISTRIBUTION_AND_UNVERIFIED_GACKUN**

### resetBehavior v0.7 — No.1536
- **設定変更**: 有利区間・天井・内部状態・モードRESET。
- **据え置き**: 有利区間・天井・内部状態・モードCARRY_OVER。
- **純電源OFF→ON**: 内部CARRY_OVER。開始表示ステージは昼へ戻るとする解析あり。
- **ゲーム数・天井**: 通常A/B・裏通常A/B 999G、チャンス/引き戻し200G、天国系/保証32G。
- **モード**: 設定変更時 通常A49.2 / 通常B10.0 / チャンス40.0 / 裏通常A0.4 / 裏通常B0.4%。
- **有利区間**: 設定変更でRESET。据え置き/純電断でCARRY_OVER。稼働中の再移行時は裏天国51.2%。
- **朝一恩恵**: 50.8%で通常A以外。40.0%で200G天井のチャンスモード。
- **朝一不利**: 前日の天井進行・モード・内部状態を失う。追加の専用不利要素はNONE_CONFIRMED。
- **変更判別**: 見た目判別不可。200G以内当選は補助材料。ガックンUNVERIFIED。
- **公開朝一数値**: 通常A49.2 / 通常B10.0 / チャンス40.0 / 裏通常A0.4 / 裏通常B0.4%、チャンス天井200G。

## 2022-11-21群 — CLOSED 3/3 canonical actual launch
1. **Lバキ 強くなりたくば喰らえ!!!（オリンピア）** — No.1534 済
2. **パチスロ 革命機ヴァルヴレイヴ（SANKYO）** — No.1535 済
3. **スマスロリノヘブン / LアナザーリノヘブンCC（山佐）** — No.1536 済

### 境界監査メモ
- 2022-09-01の日工組・日電協発表ではスマスロ販売予定4型式として `LバキL3 / L革命機ヴァルヴレイヴD / L HEY！エリートサラリーマン鏡PA4 / LアナザーリノヘブンCC` が公表された。
- ただし実導入資料・導入後記事では2022-11-21初陣はバキ / ヴァルヴレイヴ / リノヘブンの3機で一致。
- `HEY！エリートサラリーマン鏡` は実導入 **2022-12-05** で複数資料一致のため11/21群へ混入させない。
- 11/21以降〜12/4の新規パチスロ導入を再監査し、11/28独立群の明確な追加機は確認できず、次のcanonical導入群を12/5とした。
- 11/21同日メダル機/PB/別型式/地域先行も再検索したが、本線に追加すべき独立機を確認できなかったため2022-11-21群をCLOSED。

## 次の2022-12-05群 — OPEN / known queue
1. **HEY！エリートサラリーマン鏡（パオン・ディーピー / 大都技研グループ）** ← No.1537候補 / 次回最優先
2. **パチスロ幼女戦記（サミー）** — 未処理
3. **パチスロ 這いよれ！ニャル子さん（EXCITE）** — 未処理

※ 12/5群は処理中にPB・別型式・地域先行・延期/段階導入を再監査してknown queueを更新する。

## 今回の主要資料
### スマスロリノヘブン
- 遊技日本: https://news.p-world.co.jp/articles/21712/nippon
- 遊技日本 基本スペック: https://news.p-world.co.jp/articles/21774/nippon
- 遊技通信: https://news.p-world.co.jp/articles/21751/yugitsushin
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10003044/
- グリーンべると11/21実導入: https://news.p-world.co.jp/articles/22283/greenbelt
- グリーンべると製品発表: https://news.p-world.co.jp/articles/21956/greenbelt
- PiDEA検定情報: https://www.pidea.jp/articles/1663809222
- P-WORLD: https://www.p-world.co.jp/machine/database/9721
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/466/12472/
- パチマガスロマガ 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/10/tj04-1.php
- パチスロ必勝本: https://p.hisshobon.jp/vpage/2494/2
- フィールド・サービス営業資料: https://www.fieldservice.store/business-topics/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%80%8Cl%E3%82%A2%E3%83%8A%E3%82%B6%E3%83%BC%E3%83%AA%E3%83%8E%E3%83%98%E3%83%96%E3%83%B3%E3%80%8D%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E6%83%85%E5%A0%B1-%E5%96%B6
- スロパチクエスト: https://www.slopachi-quest.com/article/reno-heven-tenjou/

### 次境界
- 1geki 2022年12月新台カレンダー: https://1geki.jp/newmachinecalender/202212/
- ALL7 2022年12月導入予定: https://www.all7.jp/plans/index/2022/12

## 保存コミット
- No.1536追加: `82d3ca4fc6c697a7cb03f935c483180b6dc4ef86`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1537候補 `HEY！エリートサラリーマン鏡`（2022-12-05）から性能コア + resetBehavior v0.7を収集する。その後 `パチスロ幼女戦記` → `パチスロ 這いよれ！ニャル子さん` を同日群として処理し、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。**
