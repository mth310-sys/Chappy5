更新日: 2026-09-13

## 現在地点
- recordCount: **1538**
- latestRecordAdded: **パチスロ幼女戦記 — No.1538**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-12-05_pachislot-youjo-senki.md`
- chronologicalFrontier: **2022-12-05**
- frontierLatestMachine: **パチスロ幼女戦記 — No.1538**
- schema: **resetBehavior v0.7**
- status: **2022-12-05_GROUP_OPEN_2_OF_3_KNOWN / NEXT_HAIYORE_NYARUKO_SAN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1537 `HEY！エリートサラリーマン鏡` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- main正本はNo.1537まで進行済みで、2022-12-05群は1/3 OPEN。次の未処理 `パチスロ幼女戦記` をNo.1538として性能コア + resetBehavior v0.7で追加。
- 型式 `Sパチスロ幼女戦記 ZR`、検定番号 `2S0766`、サミー。東京都公安委員会検定情報を掲載するPiDEA、HAZUSE、サミー発表/業界資料で照合。
- 実導入は2022-12-05。発表当初の11月上旬/11月7日予定は延期されたため `RELEASE_SCHEDULE_CHANGED` として保持。
- 設定1/2/4/5/6の機械割97.9/98.4/103.1/105.8/108.1%、BONUS合算1/241.5→1/157.9、AT 1/636.8→1/491.6、約38.1G/50枚、純増約2.6枚/Gを複数資料で一致確認。
- 設定L機械割82.7%は複数二次解析で一致する一方、なな徹等の高信頼解析では調査中表記のため `ANALYSIS_MULTI_SECONDARY_NOT_HIGH_SOURCE_CONFIRMED` として通常設定より信頼度を下げて保持。LのBONUS/AT初当たりは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 幼女戦記BONUS/FAIRY BONUSは約100枚。AT `白銀RUSH` は1セット10G+α、純増約2.6枚/G、トータル継続率約94.2%。
- 天井はモード別で通常A 512G+α / 通常B 384G+α / 天国 128G+α / 超天国 128G+α。
- 設定変更は有利区間・天井/内部ゲーム数・内部モード・内部状態・OPランクRESET。設定変更後はモード/OPランクを再抽選。
- 据え置き/純電断は有利区間・天井/内部ゲーム数・モード・内部状態・OPランクCARRY_OVER。設定変更/据え置き/純電断とも朝一は現代ステージとなり、ステージ単独判別不可。
- 設定変更時モード振り分けは全設定共通で公開。通常成立役なら通常A50.0 / 通常B16.7 / 天国32.9 / 超天国0.4%。天国以上合計33.3%。弱レア役等なら通常B50.0 / 天国49.2 / 超天国0.8%、強レア役なら天国83.3 / 超天国16.7%。
- 有利区間移行時OPランクは1=50.0 / 2=20.0 / 3=4.2 / 4=25.0 / 5=0.8%。約25%でランク4、0.8%でランク5。
- 設定変更時の約6.7%でOP203開始という朝一恩恵を複数解析で一致確認。
- 有利区間ランプによる設定変更/据え置き判別は不可。開始ステージも共通。本機固有ガックン条件/発生率は表記・型式・メーカーと設定変更/リセット/朝一/据え置き/電断/ガックンを組み替え、業界記事・当時解析・古いDB・回顧資料まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部近年集約サイトに「設定変更でも天井・内部モード引継ぎ」とする記述があるが、HAZUSE・なな徹など高信頼解析は設定変更RESETで一致するため `CONFLICT_AGGREGATOR_TRANSCRIPTION_NOT_ADOPTED` として記録。

## No.1538 — パチスロ幼女戦記
- manufacturer: **サミー**
- formalModel: **Sパチスロ幼女戦記 ZR**
- inspectionCode: **2S0766**
- releaseDate: **2022-12-05**
- generation/system: **6.5号機 / メダルAT / 擬似ボーナス経由・規定ゲーム数管理型AT**
- payoutRate: **97.9 / 98.4 / 103.1 / 105.8 / 108.1%**（設定1/2/4/5/6）
- BONUS: **1/241.5 / 1/234.3 / 1/205.5 / 1/183.7 / 1/157.9**
- AT: **1/636.8 / 1/642.1 / 1/565.4 / 1/531.4 / 1/491.6**
- baseGamesPer50: **約38.1G/50枚**
- netIncrease: **約2.6枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_PUBLIC_MODE_TABLE_OP_RANK_AND_OP203_START_RATE**
- confidence: **HIGH core / HIGH reset core / HIGH numeric morning-reset / settingL payout secondary-only / gackun UNVERIFIED**

### resetBehavior v0.7 — No.1538
- **設定変更**: 有利区間・内部ゲーム数/天井・モード・内部状態・OPランクRESET/再抽選。
- **据え置き**: 有利区間・内部ゲーム数/天井・モード・内部状態・OPランクCARRY_OVER。
- **純電源OFF→ON**: 同内部値CARRY_OVER。朝一は現代ステージ。
- **ゲーム数・天井**: 通常A512G+α / 通常B384G+α / 天国128G+α / 超天国128G+α。
- **モード**: 設定変更時その他成立なら天国以上33.3%。弱レア役等なら50.0%、強レア役なら100%。
- **状態**: 設定変更RESET / 据え置き・純電断CARRY_OVER。
- **有利区間**: 設定変更RESET / 据え置き・純電断CARRY_OVER。稼働中はAT終了時の一部・エンディング後にもRESET。
- **朝一恩恵**: 初期OPランク4 25.0%、ランク5 0.8%、OP203開始約6.7%、通常成立でも天国以上33.3%。
- **朝一不利**: 前日内部G/モード/状態/OPランクを失う。追加専用不利はNONE_CONFIRMED。
- **変更判別**: 設定変更/据え置き/純電断とも現代ステージ。有利区間ランプ不可。規定G挙動は補助材料。ガックンUNVERIFIED。
- **公開朝一数値**: モード成立役別テーブル、OPランク1〜5振り分け、OP203開始約6.7%。

## 2022-11-21群 — CLOSED 3/3 canonical actual launch
1. **Lバキ 強くなりたくば喰らえ!!!（オリンピア）** — No.1534 済
2. **パチスロ 革命機ヴァルヴレイヴ（SANKYO）** — No.1535 済
3. **スマスロリノヘブン / LアナザーリノヘブンCC（山佐）** — No.1536 済

## 2022-12-05群 — OPEN 2/3 known queue
1. **HEY！エリートサラリーマン鏡（パオン・ディーピー）** — No.1537 済
2. **パチスロ幼女戦記（サミー）** — No.1538 済
3. **パチスロ 這いよれ！ニャル子さん（EXCITE）** ← No.1539候補 / 次回最優先

※ 12/5群は既知3機処理後、PB・別型式・30Φ派生・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 今回の主要資料
### パチスロ幼女戦記
- サミー公式チャンネル最速解説: https://www.youtube.com/watch?v=28HcVZDHH54
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-53840/
- PiDEA 検定通過: https://www.pidea.jp/articles/1661140582
- SUNTAC 12/5導入速報: https://suntac.jp/market/post3217/
- P-BOMB 発表時資料: https://p-bomb.co.jp/industry/new-machine/5197/
- HAZUSE基本: https://hazuse.com/machine/pachislot/2S0766/genre/201/
- HAZUSE天井/設定変更: https://hazuse.com/machine/pachislot/2S0766/genre/207/
- なな徹総合: https://nana-press.com/kaiseki/machine/447/
- なな徹朝一: https://nana-press.com/kaiseki/machine/447/12714/
- なな徹スペック: https://nana-press.com/kaiseki/machine/447/11621/
- P-WORLD: https://www.p-world.co.jp/machine/database/9719
- 一撃: https://1geki.jp/slot/s_yojo_senki/
- 必勝本: https://p.hisshobon.jp/machine/3992/1/91008
- スロパチクエスト: https://www.slopachi-quest.com/article/youjyosenki-tenjou/

## 保存コミット
- No.1538追加: `352edc7140b869375acd93df4456d3af2d7afa83`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1539候補 `パチスロ 這いよれ！ニャル子さん`（2022-12-05）から性能コア + resetBehavior v0.7を収集する。処理後、2022-12-05群をPB・別型式・30Φ派生・地域先行・延期/段階導入まで再監査し、CLOSED可否を判定して次のcanonical導入群へ進む。**