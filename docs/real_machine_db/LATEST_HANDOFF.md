更新日: 2026-09-11

## 現在地点
- recordCount: **1314**
- latestRecordAdded: **PYRAMID EYE（ピラミッドアイ） — No.1314**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-10-21_pyramid-eye.md`
- chronologicalFrontier: **2019-10-21**
- frontierLatestMachine: **PYRAMID EYE — No.1314**
- schema: **resetBehavior v0.7**
- status: **2019_10_21_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1312を再取得。
- `INDEX.md` は古い19件表示だが、READMEの明示ルールどおりINDEXより新しい `LATEST_HANDOFF.md` を正本進捗として優先し、No.1312の次から継続。
- 保留 `プレドキ！` を短く再監査。P-WORLDは2019-12-02時点の機種DB掲載を確認できるが、具体的な初回ホール導入日を固定できる一次/当時資料は今回も未取得。時系列本線を止めず保留継続。
- No.1313 **闘魂継承 アントニオ猪木という名のパチスロ機**を追加。
- No.1314 **PYRAMID EYE（ピラミッドアイ）**を追加。
- 2019-10-21群を導入日一覧・業界記事・個別解析で横断監査。導入日順一覧では同日パチスロが猪木とPYRAMID EYEの2機で一致し、両機の個別資料でも2019-10-21導入を確認。追加独立機を固定できなかったため **2019-10-21群CLOSED**。

## No.1313 — 闘魂継承 アントニオ猪木という名のパチスロ機
- manufacturer: **オリンピア**
- formalModel: **`S闘魂継承アントニオ猪木L3`**
- certificationNumber: **`9S0824`**
- releaseDate: **2019-10-21**
- generation/system: **6号機 / AT / ベルナビ回数管理型AT**
- payout: **97.6 / 98.7 / 100.2 / 104.1 / 108.8 / 114.9%**
- CZ: **1/442.6 / 418.8 / 380.0 / 324.5 / 274.1 / 215.2**
- AT: **1/680.6 / 646.9 / 597.5 / 513.0 / 433.9 / 340.6**
- base canonical: **約51G/50枚**（一部資料は約51〜55G）
- 純増: **約4.0枚/G**
- ATベルナビ平均: **約17.3回**
- CZ天井: **通常700G+前兆 → 闘魂GP**。AT確定天井ではない。

### resetBehavior v0.7 — No.1313
- 設定変更: **天井G RESET**。
- 据え置き: **天井進行CARRY_OVER**。モード/状態の本機固有直接契約は未固定。
- 純電源OFF→ON: **天井G CARRY_OVER**。状態/開始ステージは当時解析でも調査中で、再探索後もUNVERIFIED。
- 有利区間移行時にCZ天井を **100 / 300 / 700G** から抽選。
- 100G天井振り分け: **6.3 / 7.0 / 7.8 / 10.2 / 16.4 / 25.0%**。
- 300G天井: **全設定12.5%**。
- 上記天井振り分けは設定変更専用ではなく、**有利区間移行時共通値**として分離。
- 通常時は有利区間ランプ非点灯型とする検証があり、朝一消灯だけでは変更判別不可。
- 朝一即前兆から約25G前後でのゲーム数契機CZ当選はリセット推測材料だが確定ではない。
- 100Gごとの怒ポイント演出は設定変更/純電断双方で出るため判別不可。
- 本機固有ガックン条件/率は再探索後も `PUBLIC_GAKKUN_CONTRACT_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PARTIAL_STATE_CONTRACT**。

## No.1314 — PYRAMID EYE
- manufacturer: **大都技研**
- formalModel: **`S PYRAMID EYE A2`**
- certificationNumber: **`8S0809`**
- releaseDate: **2019-10-21**
- generation/system: **6号機 / ノーマルAタイプ / 2段階設定 / 技術介入要素あり**
- payout market: **設定1 98.9% / 設定6 108.6%**
- payout complete-play: **設定1 100.4% / 設定6 110.3%**
- BIG: **1/69.1 / 1/57.0**
- REG: **1/93.1 / 1/74.0**
- 合算: **1/39.7 / 1/32.2**
- base canonical: **約22G/50枚**（一部資料約23G）
- BIG: **平均約130枚** / REG: **平均約40枚**
- 天井: **非搭載**
- RT: **非搭載**

### resetBehavior v0.7 — No.1314
- 天井非搭載のため、設定変更/据え置き/純電断の天井G契約はN/A。
- ちょんぼりすたは朝一リセット恩恵を **「特に無し」** と整理。
- 一撃の当時資料では設定変更時/電源OFF→ON時の液晶ステージは双方「現在調査中」。
- 成立済みボーナス/内部状態、開始出目、開始ステージ、据え置きと純電断の直接契約は資料系統を変えても高信頼に固定できずUNVERIFIED。
- ボーナスのみで出玉を増やすノーマルタイプでRT非搭載のため、ホール朝一AI用の有利区間リセット比較は `N/A_FOR_BONUS_ONLY_NORMAL_TYPE`。
- 下パネル消灯は設定6示唆情報であり、変更/据え置き判別とは分離。
- 本機固有ガックン条件/率・朝一専用公開数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_NO_MATERIAL_RESET_BENEFIT_FOUND**。

## 2019-10-21群 — CLOSED
処理済み:
1. **闘魂継承 アントニオ猪木という名のパチスロ機** — No.1313。
2. **PYRAMID EYE（ピラミッドアイ）** — No.1314。

監査根拠:
- 2019年導入日順一覧は10/21を上記2機で掲載。
- 遊技日本は猪木を10/21全国ホール導入開始と記録。
- 大都機の業界試打/パチスロサミット/K-Navi等はPYRAMID EYEを10/21導入で一致。
- 10/28の独立パチスロ新台候補は今回の横断検索で固定できず、次に明確な導入群は11/5。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — プレゴ専用PBまでは公式で固定。P-WORLDは2019-12-02時点で機種DB掲載。具体導入日未固定のため未登録継続。時系列本線を止めない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` を確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1314 を再取得。
2. 保留 `プレドキ！` は具体導入日の確定資料のみ短く再監査し、未確定なら本線を止めない。
3. **2019-11-05群**へ進む。
4. 既知未処理候補: **`パチスロ北斗の拳 天昇` / `サラリーマン金太郎～MAX～`**。
5. 11/5群を全メーカー/別型式/別スペック/PB/地域差まで監査してCLOSED可否を判定。
6. 遡及QAは `リングにかけろ1` からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11
### No.1313 闘魂継承 アントニオ猪木
- 遊技日本: https://yugi-nippon.com/pachinko-news/post-30527/
- HAZUSE基本: https://hazuse.com/machine/pachislot/9S0583/genre/201/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_tk_inoki/3/
- HAZUSE設定推測: https://hazuse.com/machine/pachislot/9S0583/genre/208/
- 2-9伝説: https://2-9densetsu.com/inoki6/
- スロパチくえすと: https://www.slopachi-quest.com/article/toukonnkeishou-settei/
- 期待値見える化: https://slotjin.com/slot/inoki-reset/
- 当時遊技解説: https://www.youtube.com/watch?v=nZ1u-14j5rQ
- すろかい: https://slotkaiseki.hatenablog.com/entry/inoki

### No.1314 PYRAMID EYE
- グリーンべると検定情報: https://web-greenbelt.jp/00011478/
- アミューズメントジャパン/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/11892/amusement
- PiDEA X: https://www.pidea.jp/articles/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E5%8F%B0%E3%80%8Cpyramid-eye%E3%80%8D%E6%A9%9F%E7%A8%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%8C%E5%85%AC%E9%96%8B%EF%BC%8F%E5%A4%A7%E9%83%BD%E6%8A%80%E7%A0%94
- パチビー: https://www.pachibee.jp/machines/index/219090001
- ちょんぼりすた: https://chonborista.com/slot/daito-slot/92165/
- 一撃: https://1geki.jp/slot/s_pyramid_eye/3/
- K-Navi: https://p-kn.com/slot/3330/
- スロパチくえすと: https://www.slopachi-quest.com/article/pyramideye-settei/
- 2-9伝説: https://29den.com/pyramideye/
- パチスロサミットONLINE: https://www.pachislot-summit.com/model/%EF%BD%90%EF%BD%99%EF%BD%92%EF%BD%81%EF%BD%8D%EF%BD%89%EF%BD%84-%EF%BD%85%EF%BD%99%EF%BD%85%E3%83%94%E3%83%A9%E3%83%9F%E3%83%83%E3%83%89%E3%82%A2%E3%82%A4/

### 2019-10-21群監査 / 次群
- 2019年導入日順一覧: https://www.slopachi-quest.com/article/2019-dounyuukishu/
- 2019年新台導入日カレンダー（11/5候補確認）: https://pachinkopachisro.com/archives/52807194.html

### プレドキ！継続監査
- プレゴ公式: https://www.p-prego.com/content.html
- P-WORLD: https://www.p-world.co.jp/machine/database/9067
