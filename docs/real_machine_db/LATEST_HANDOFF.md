# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **734**
- latestMachineAdded: **龍虎の拳**（SNKプレイモア）
- latestRecord: `docs/real_machine_db/machines/2013-05-07_ryuko-no-ken.md`
- chronologicalFrontier: **2013-05-07**
- frontierLatestExactDateMachine: **龍虎の拳**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-05-07_GROUP__NEXT_ONI_NO_SHIRO**

## 今回の同期

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-05-07_sousei-no-aquarion-2.md` を確認。
- INDEXは19件地点の旧集約状態なので、README規定どおり最新HANDOFFと実レコードを正本として優先。
- 開始時main正本は recordCount **733** / chronologicalFrontier **2013-05-07** / 05-07群OPEN。
- 05-07残存監査で、前handoffに未記載だった **龍虎の拳**（SNKプレイモア）と **鬼の城**（メーシー）がHAZUSE/パチビー等でともに2013-05-07導入と確認された。
- repo検索で龍虎の拳は未登録だったため734件目として追加。
- ALL7の「キャッツ・アイ コレクション奪還作戦」は5/7表記だが、専用資料群が2013-05-20で一致しているため引き続き5/20候補扱い。

## 今回追加 — 龍虎の拳

### identity / 性能コア

- manufacturer: **SNKプレイモア**。
- releaseDate: **2013-05-07**。
- formalModelName: **龍虎の拳B**。
- inspectionNumber: **2S1388**。
- systemType: **5号機 / AT**。
- AT「極限RUSH」出現率（セット連含む）: **1/294.7 / 280.5 / 266.7 / 237.9 / 208.2 / 180.2**。HAZUSE、P-WORLD、業界記事で一致。
- baseGamesPer50: **約33G/50枚**（HAZUSE）。
- AT: **1セット50G+上乗せ / 純増約3.0枚/G**。
- 通常時モード別最大天井: **1280G / 1280G / 896G / 128G**（モードA/B/天国準備/天国）。
- 機械割は資料競合のため平均せず `CONFLICT`:
  - P-WORLD/パチビー: **96.9 / 98.7 / 99.9 / 104.2 / 108.7 / 114.4%**
  - HAZUSE/pacnk: **97.2 / 99.0 / 100.3 / 104.6 / 109.2 / 114.9%**
- 当時個人整理には「メーカー発表暫定値」として設定4のみ106.4%の別系列もあり、転記誤りを補正せず参考CONFLICTとして保持。

### resetBehavior v0.7

- 機種名/型式名/メーカー名と「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「モード」「ガックン」を組み替え、HAZUSE、P-WORLD、パチビー、業界記事、古い解析/回顧資料を横断。
- pacnkの本機整理資料で **設定変更時にゲーム数天井RESET、通常時モード再抽選**を直接確認。
- 設定変更後の具体的モード振り分け率、内部状態初期値、純据え置き時のゲーム数/モード保持、単純電源OFF→ON時の保持契約、ガックン/液晶等の変更判別、公表朝一数値は十分再探索後も本機固有直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH` / `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更でリセットされることの反対推定だけで据え置き・電断保持を確定していない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetQaStatus: **RESEARCHED__PARTIAL_DIRECT_RESET_CONTRACT_FIXED**。

## 遡及resetBehavior QA 進捗

- 本線と別のQA再開地点は引き続き `docs/real_machine_db/machines/2007-01_karate-baka-ichidai.md`。
- 本線収集を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 734 / chronologicalFrontier 2013-05-07 / 05-07群OPEN** から開始。
2. 同日未登録として確認済みの **鬼の城**（メーシー、型式 `鬼の城T`、検定番号 `2S1145`）を最優先で重複確認→本調査→追加。
3. 鬼の城処理後も2013-05-07同日群をメーカー別一覧・HAZUSE/K-Navi/パチビー等で残存監査し、未登録がなければ05-07群をCLOSED。
4. その後05-08以降へ前進。キャッツ・アイは専用資料に従い **2013-05-20候補**として扱う。
5. 龍虎の拳の未検証reset項目は後続QAで別資料が見つかった場合のみ補完し、一般的5号機挙動から推測しない。

## 主要出典 — 取得日 2026-09-06

### 境界監査

- ALL7 2013年5月一覧: `https://www.all7.jp/plans/index/2013/05`
- 龍虎の拳 HAZUSE: `https://hazuse.com/machine/pachislot/2S1388/`
- 龍虎の拳 パチビー: `https://www.pachibee.jp/machines/index/213030009`
- 鬼の城 HAZUSE: `https://hazuse.com/machine/pachislot/2S1145/`
- 鬼の城 パチビー: `https://www.pachibee.jp/movies/index/9329`

### 龍虎の拳

- HAZUSE（型式、検定番号、導入日、AT確率、約33G/50枚、機械割、通常モード/天井）: `https://hazuse.com/machine/pachislot/2S1388/`
- パチビー（導入日、AT仕様、純増、モード別天井、機械割/AT確率）: `https://www.pachibee.jp/machines/index/213030009`
- P-WORLD（AT初当たり、機械割、AT構造）: `https://www.p-world.co.jp/machine/database/7038`
- グリーンべると（2013-03-21、純増3枚/G、50G、AT確率、5/6納品開始）: `https://web-greenbelt.jp/00000813/`
- K-Navi（AT中闘神バトルのモード別天井）: `https://p-kn.com/slot/1836/43762/`
- pacnk（設定変更で天井Gリセット/モード再抽選、機械割/AT確率）: `https://pacnk.com/slot/tools/sh_ryukonoken.html`
- 当時個人整理資料（メーカー発表暫定値とされる別機械割系列、参考CONFLICT）: `https://dream777star.blog47.fc2.com/blog-entry-2440.html`
