# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **503**
- latestMachineAdded: **ワイルドキャッツ**（ラスター / 2010-08-23）
- latestRecord: `docs/real_machine_db/machines/2010-08-23_wild-cats.md`
- chronologicalFrontier: **2010-08-23**
- frontierLatestMachine: **ワイルドキャッツ**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線502実レコード「ギラギラ爺サマー」を再取得。
- `INDEX.md` は旧19件地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **502** / chronologicalFrontier **2010-08-02**。
- 2010-08-02同日群を再監査し、8/3〜8/22について旧導入一覧・機種DB・当時業界記事の系統を変えて探索。502より後かつ8/23より前に追加すべき未登録5号機を高信頼に確定できなかったため、既知アンカー2010-08-23「ワイルドキャッツ」をrepo検索し未登録確認後、503件目として追加。
- K-Navi・パチビーで全国ホール導入開始 **2010-08-23**、2010-06-24グリーンべるとで納品開始 **2010-08-22予定**を確認。物流開始と全国導入を分離し主値は2010-08-23。

## 503 — ワイルドキャッツ 要約

- メーカー: **ラスター**。当時グリーンべるとは**ニューアーク発表・ラスター製**と明記するため、パチビー/パチマガスロマガのニューアーク表記は販売・発表側として役割分離。
- 型式名: **ワイルドキャッツ**（P-WORLD）
- 検定番号: **0S0339**（P-WORLD）
- 世代/タイプ: **5号機 / A+ART / 60G完走型ART「貯金ゾーン」 / CZ**
- BIG: **1/399 / 1/387 / 1/376 / 1/366 / 1/356 / 1/344**
- CB/REG: **1/689 / 1/624 / 1/569 / 1/524 / 1/485 / 1/451**
- ボーナス合算: **1/253 / 1/239 / 1/226 / 1/215 / 1/205 / 1/195**
- 機械割: **97.28 / 99.68 / 102.11 / 104.37 / 106.70 / 109.13%**
- 50枚ベース: **約31.6〜32.6G/1000円**（当時グリーンべると。設定別割当は推定しない）
- BIG約**270枚**、CB約**27枚**
- ART「貯金ゾーン」: **60G / 約+0.9〜1.0枚/G / ループ約1/3**
- ART純増はP-WORLD/パチビーの約0.9枚/GとK-Navi/グリーンべるとの約1.0枚/Gを `CONFLICT` として双方保持。
- 通常ゲーム数型固定天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_ART_NET_INCREASE_CONFLICT**

## resetBehavior v0.7 — ワイルドキャッツ

- **設定変更**: CZ/ART/内部RT状態、ART残G・権利、初期リール/表示処理について本機固有の直接資料を回収できず `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: CZ/ART/内部RT、ART残G・権利の保持/再初期化は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: CZ/ART/内部RT、ART残G・権利、初期出目は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: K-Navi攻略・天井、P-WORLD、パチビー、当時業界記事を再探索したが通常ゲーム数型固定天井は `NONE_CONFIRMED_AFTER_RESEARCH`。したがって設定変更時clear/retainを推測しない。
- **モード/状態**: 設定変更専用振り分け、CZ/ART/内部RT状態の変更時処理は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: **NONE_CONFIRMED_AFTER_RESEARCH**。通常仕様のボーナス後ART保証をリセット恩恵と誤認しない。
- **変更判別**: ガックン、初期出目、ランプ、液晶、CZ挙動等を検索語と資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 固定短縮天井、リセット専用ART初当たり率、モード振り分けは確認できず。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehaviorありのため重複QAしない。
- 今回GitHub code searchで `2006-11` / 過去候補名を再探索したが、ジャックと豆の木直後の実在machine pathを順序保証付きで一意確定できなかった。タイトル推測で進捗マーカーを動かさない。
- 次回は recursive tree / commit history / 実ファイルpathのいずれかで、ジャック直後かつresetBehavior欠損の最初の実レコードを確定してからパッチする。
- 新規機種の時系列前進は止めない。

## 主要出典（取得日 2026-09-03）

### ワイルドキャッツ
- パチビー: `https://www.pachibee.jp/machines/index/210060006`
- K-Navi: `https://p-kn.com/slot/1245/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6028`
- グリーンべると 2010-06-24: `https://news.p-world.co.jp/articles/4038/greenbelt`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/newark_slot/01/a.php`

## 今回のGitHub更新

- 503 ワイルドキャッツ追加: commit `6cae5fdb8353c03b5678244fe026ae260fb5849c`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 503 / chronologicalFrontier 2010-08-23**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-08-23同日群を監査**し、ワイルドキャッツ以外の未登録パチスロがあれば同日順で504件目候補とする。
3. 同日群を閉じた後は **2010-08-24以降**を日付境界監査し、全国導入・地域先行・月粒度漏れを確認して最古の未処理機種へ進む。
4. 503のreset後続QAは、設定変更/据え置き/単純電源OFF→ONのCZ・ART・内部RT処理、初期出目/ガックン等の変更判別、固定天井有無の新資料が見つかった場合のみ追補。既存性能コアは不用意に崩さない。
5. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実ファイルpath確定から再開し、既にresetBehavior済みの `2006-11-27_thunder-v-special.md` はスキップする。
