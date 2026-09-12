更新日: 2026-09-13

## 現在地点
- recordCount: **1539**
- latestRecordAdded: **パチスロ 這いよれ！ニャル子さん — No.1539**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-12-05_haiyore-nyaruko-san.md`
- chronologicalFrontier: **2022-12-05**
- frontierLatestMachine: **パチスロ 這いよれ！ニャル子さん — No.1539**
- schema: **resetBehavior v0.7**
- status: **2022-12-05_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT / NEXT_2022-12-19_TRUE_ORE_NO_SORA**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1538 `パチスロ幼女戦記` を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり、最新handoffとmain実レコードを進捗正本として採用。
- main正本はNo.1538まで進行済み、2022-12-05群2/3 OPENだったため、次の未処理 `パチスロ 這いよれ！ニャル子さん` をNo.1539として性能コア + resetBehavior v0.7で追加。
- 型式 `Sハイヨレ!ニャルコサンY`、EXCITE（ニューギングループ）。2022-09-13検定通過を業界記事で確認。DBで使用する `2Sxxxx` 形式の検定番号は表記揺れ・型式・メーカー・検定情報を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 実導入は2022-12-05。SUNTACの12/5新台速報、なな徹、P-WORLD、K-Navi等で一致。
- 設定1〜6の機械割97.5/98.7/100.7/103.5/106.5/110.1%、初当たり合算1/226.4→1/180.1、AT 1/476.4→1/334.9、約32.6G/50枚、純増約2.7枚/Gを業界記事・P-WORLD・なな徹・一撃・解析資料で照合。
- `這いよれBONUS` 40G・平均約104枚、`ニャル子さん劇場` 20G・平均約52枚、AT `邪神決闘` 1セット30G。通常時ニャル目160回でボーナス天井。
- 設定変更時は有利区間・天井・内部状態・モードRESET、据え置きはCARRY_OVERをなな徹で確認。
- 朝一の主要恩恵は `でんぶゾーン` スルー天井の1回短縮。通常は4スルー後の次回ボーナス（5回目）でAT確定、設定変更時は3スルー後の次回ボーナス（4回目）でAT確定。なな徹・一撃・ちょんぼりすたで一致。
- 純電源OFF→ONでは天井・内部状態引継ぎを確認。モード / 有利区間 / でんぶゾーンスルー回数について純電断単独で明示した機種別直接契約は固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論で補完していない。
- リセット判別はなな徹で調査中。本機固有ガックン、初期出目、有利区間ランプ単独判別は表記・型式・メーカーと設定変更/リセット/朝一/据え置き/電断/ガックン/有利区間を組み替え、業界記事・解析サイト・旧DB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 2022-12-05群はSUNTAC、必勝本の導入週データ、なな徹2022年下半期回顧等を横断。`HEY！エリートサラリーマン鏡` / `パチスロ幼女戦記` / `パチスロ 這いよれ！ニャル子さん` の3機で一致。PB・別型式・30Φ派生・地域先行・延期/段階導入の追加独立パチスロ機を確認できず **CLOSED 3/3** とした。

## No.1539 — パチスロ 這いよれ！ニャル子さん
- manufacturer: **EXCITE（ニューギングループ）**
- formalModel: **Sハイヨレ!ニャルコサンY**
- inspectionCode: **UNVERIFIED_AFTER_RESEARCH**
- releaseDate: **2022-12-05**
- generation/system: **6.5号機 / メダルAT / 擬似ボーナス→AT高確率ゾーン経由型**
- payoutRate: **97.5 / 98.7 / 100.7 / 103.5 / 106.5 / 110.1%**
- initialHit: **1/226.4 / 1/221.6 / 1/214.8 / 1/202.5 / 1/191.6 / 1/180.1**
- AT: **1/476.4 / 1/461.4 / 1/437.2 / 1/401.4 / 1/368.7 / 1/334.9**
- baseGamesPer50: **約32.6G/50枚**
- netIncrease: **約2.7枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_SHORTENED_DENDU_ZONE_SKIP_CEILING**
- confidence: **HIGH core / HIGH reset core / HIGH reset ceiling-shortening / inspectionCode & gackun & some pure-power-cycle fields UNVERIFIED_AFTER_RESEARCH**

### resetBehavior v0.7 — No.1539
- **設定変更**: 有利区間・ニャル目回数天井・内部状態・モード・でんぶゾーンスルー回数RESET。
- **据え置き**: 有利区間・天井・内部状態・モードCARRY_OVER。
- **純電源OFF→ON**: 天井・内部状態CARRY_OVER確認。モード / 有利区間 / スルー回数は純電断単独の直接契約未固定。
- **ゲーム数/天井**: 固定G数ではなくニャル目累計160回でボーナス。通常出現率1/3.8の単純換算で約608G相当だが高確中1/1.5のため固定G数天井とは扱わない。
- **スルー天井**: 通常4スルー→次回ボーナスでAT確定、設定変更時3スルー→次回ボーナスでAT確定。
- **モード**: 設定変更RESET / 据え置きCARRY_OVER。設定変更専用振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- **状態**: 設定変更RESET / 据え置きCARRY_OVER / 純電断CARRY_OVER確認。
- **有利区間**: 設定変更RESET / 据え置きCARRY_OVER。AT終了時の一部でもRESET。
- **朝一恩恵**: でんぶゾーンスルー天井1回短縮。
- **朝一不利**: 前日ニャル目回数・モード・内部状態・スルー回数の進行を失う。追加専用不利なし。
- **変更判別**: 高信頼解析でも調査中。ガックン・有利区間ランプ単独契約は未固定。
- **公開朝一数値**: 設定変更時は3スルー後の次回ボーナス（4回目）でAT確定。

## 2022-11-21群 — CLOSED 3/3 canonical actual launch
1. **Lバキ 強くなりたくば喰らえ!!!（オリンピア）** — No.1534 済
2. **パチスロ 革命機ヴァルヴレイヴ（SANKYO）** — No.1535 済
3. **スマスロリノヘブン / LアナザーリノヘブンCC（山佐）** — No.1536 済

## 2022-12-05群 — CLOSED 3/3 canonical actual launch
1. **HEY！エリートサラリーマン鏡（パオン・ディーピー）** — No.1537 済
2. **パチスロ幼女戦記（サミー）** — No.1538 済
3. **パチスロ 這いよれ！ニャル子さん（EXCITE）** — No.1539 済

## 次のcanonical導入群 — 2022-12-19
現時点の横断候補:
1. **パチスロ 真俺の空（スパイキー）** ← No.1540候補 / 次回最優先
2. **もっと！チバリヨ-30（NET）**
3. **沖ドキ！GOLD（ユニバーサルブロス / 25Φ）**
4. **沖ドキ！GOLD-30（ミズホ / 30Φ）**

- ALL7の2022年12月導入一覧、なな徹2022年下半期回顧、1gekiメーカー別一覧、GreenBelt実導入記事で12/19導入を照合。
- 沖ドキ！GOLD 25Φ / 30Φは別型式・別メーカー名義として一覧上独立しているため、性能同一の可能性があっても最初から自動統合せず個別型式確認後にレコード方針を決める。

## 今回の主要資料
### パチスロ 這いよれ！ニャル子さん
- P-WORLD / 遊技日本: https://news.p-world.co.jp/articles/21970/nippon
- P-WORLD / 遊技通信: https://news.p-world.co.jp/articles/21961/yugitsushin
- SUNTAC 12/5導入速報: https://suntac.jp/market/post3217/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9736
- なな徹総合: https://nana-press.com/kaiseki/machine/467/
- なな徹朝一: https://nana-press.com/kaiseki/machine/467/12784/
- なな徹天井: https://nana-press.com/kaiseki/machine/467/12783/
- なな徹でんぶゾーン: https://nana-press.com/kaiseki/machine/467/12789/
- 一撃総合: https://1geki.jp/slot/s_nyaruko/
- 一撃天井/設定変更: https://1geki.jp/slot/s_nyaruko/3/
- 必勝本スペック: https://p.hisshobon.jp/vpage/2501/2
- 必勝本ボーナス: https://p.hisshobon.jp/vpage/2501/4
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/175464/
- ぱちんこキュレーション: https://pachinko-curation.com/7529/
- 検定通過記事: https://news.p-world.co.jp/articles/21689/nippon

### 12/5群監査
- SUNTAC: https://suntac.jp/market/post3217/
- 必勝本12/12ホールデータ: https://p.hisshobon.jp/vpage/2499/3
- なな徹2022年下半期回顧: https://nana-press.com/post/1576913

### 12/19群候補確認
- ALL7 2022年12月: https://www.all7.jp/plans/index/2022/12
- GreenBelt 真俺の空: https://news.p-world.co.jp/articles/22549/greenbelt
- GreenBelt 沖ドキ！GOLD: https://news.p-world.co.jp/articles/22550/greenbelt
- 1geki NETメーカー一覧: https://1geki.jp/maker/net/
- 1geki UNIVERSALメーカー一覧: https://1geki.jp/maker/universal/

## 保存コミット
- No.1539追加: `d1f52644b90638c0169886c2ed8b6e606e5d7e1f`
- handoff更新: 本コミット

## 次回再開地点
**本線はNo.1540候補 `パチスロ 真俺の空`（2022-12-19）から性能コア + resetBehavior v0.7を収集する。その後 `もっと！チバリヨ-30` → `沖ドキ！GOLD` → `沖ドキ！GOLD-30` の順に型式・導入実績を確認しつつ処理し、PB・派生・地域先行・延期/段階導入まで再監査して2022-12-19群のCLOSED可否を判定する。**
