更新日: 2026-09-10

## 現在地点
- recordCount: **1182**
- latestRecordAdded: **カンフーレディ・テトラ**
- latestRecordAddedPath: `docs/real_machine_db/machines/2018-03-19_kung-fu-lady-tetra.md`
- chronologicalFrontier: **2018-03-19**
- frontierLatestMachine: **カンフーレディ・テトラ — No.1182**
- schema: **resetBehavior v0.7**
- status: **2018-03-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1181 `パチスロ マイケル・ジャクソン` を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF.md` + main実レコードを正本として採用。
- 開始時正本は **1181件 / chronologicalFrontier 2018-03-19 / 3/19群OPEN / 2機処理済み**。
- handoff指定の次候補 `カンフーレディ・テトラ` を既存レコード検索で未登録確認後、No.1182としてperformance core + resetBehavior v0.7で追加。
- 当時カレンダー/導入一覧/業界記事を再監査し、3/19パチスロ候補は `ドリームクルーン500` / `パチスロ マイケル・ジャクソン` / `カンフーレディ・テトラ` の3機で相互確認。3機すべて処理済みのため3/19群をCLOSE。
- 2018-03-26の独立パチスロ新台群は今回の横断検索で固定できず、次に複数資料で明確に確認できる導入日群は **2018-04-02**。

## No.1182 — カンフーレディ・テトラ
- path: `docs/real_machine_db/machines/2018-03-19_kung-fu-lady-tetra.md`
- manufacturer: **山佐**
- releaseDateCanonical: **2018-03-19**
- formalModelName: `カンフーレディEVO／XX`
- certificationNumber: `7S1214`
- generation/system: **5.9号機 / A+RT / 技術介入機**
- settings: **1 / 2 / 5 / 6**
- 通常機械割: **97.9 / 100.0 / 102.4 / 105.5%**
- 完全攻略機械割: **100.6 / 103.0 / 105.5 / 108.7%**
- BIG: **全設定1/295.2**
- REG: **1/370.2 / 1/343.1 / 1/313.5 / 1/295.2**
- ボーナス合成: **1/164.2 / 1/158.6 / 1/152.0 / 1/147.6**
- 50枚ベース: **約36G/50枚**
- BIG: **最大285枚** / REG: **最大117枚**
- RT純増: **約0.1枚/G**
- RT: BIG後初回奥義15G、再昇格時7G、試練との技術介入時ループ約66%、平均滞在約35G
- 天井: **非搭載**

### resetBehavior v0.7
- 天井非搭載のため通常天井カウンタ/設定変更時短縮天井は`NOT_APPLICABLE`。
- 機種名/型式/山佐/シリーズ名と、設定変更・リセット・朝一・据え置き・電源OFF ON・RT状態・ガックン・有利区間を組み替え、HAZUSE、必勝本、パチマガスロマガ、ちょんぼりすた、P-WORLD、業界記事、後年DBを横断。
- 設定変更時RT状態/残G、成立済みボーナス、表示/演出モード、純電源OFF→ON時RT状態/残G、据え置きを純電断と分離した直接契約は十分な再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- 朝一専用の内部モード、ボーナス/RT優遇、設定変更専用の公開数値的恩恵は`NONE_CONFIRMED_AFTER_RESEARCH`。
- 本機固有のガックン/初期出目/ランプ変更判別は`UNVERIFIED_AFTER_RESEARCH`。
- 5.9号機一般論から有利区間使用/設定変更時処理を推定転記しない。本機固有資料では固定できず`UNVERIFIED_AFTER_RESEARCH`。
- 通常時の「閃光/心眼」はユーザー任意選択の演出モードで、朝一内部モードと混同しない。

## CONFLICT / 品質メモ
- 主要性能コアは必勝本・HAZUSE・パチマガスロマガ・ちょんぼりすた・P-WORLDおよび当時業界記事で整合。
- 後年5号機クロニクルは当該項目に導入2018年11月、BIG207枚、REG48枚を載せるが、型式/検定番号付きHAZUSEおよび複数当時資料の2018-03-19、BIG285枚、REG117枚と大きく競合。平均せず`CONFLICT_LOW_CONFIDENCE_RETROSPECTIVE`としてレコードに保持し不採用。
- グリーンべるとの「納品開始3/18予定」と各解析DBの「ホール導入3/19」は定義差であり、releaseDateCanonicalは3/19。

## 2018-03-19群監査
- 複数資料で `ドリームクルーン500`、`パチスロ マイケル・ジャクソン`、`カンフーレディ・テトラ` を確認。
- No.1180〜1182として全3機処理済み。
- status: `2018-03-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT`。

## 次導入日群の先行確認
- **2018-04-02**候補として少なくとも以下を確認:
  - `押忍！番長A` — 大都技研 — 2018-04-02
  - `ガールズガンズグルービー` — ニューギン — 2018-04-02
- 2018-03-26については検索を変えても今回独立したパチスロ新台群を確定できず。次回開始時に3/20〜4/1境界をもう一度横断してから4/2群OPENとする。

## 継続注意事項
- `美ラメキ！`を2018-03-12へ登録しない。canonicalは2018-07-02として後続キューで処理する。
- `ドリームクルーン500`と後継`ドリームクルーン711`（2018-12-03）、6号機`ドリームクルーン2`を混同しない。
- No.1182のBIG/REG獲得枚数は285/117枚をcanonicalとし、後年回顧DBの207/48枚はCONFLICTとしてのみ保持。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainのREADME / mission v0.7 / INDEX / LATEST_HANDOFF / No.1182を再取得。
2. **1182件 / chronologicalFrontier 2018-03-19 / 3/19群CLOSED** を正本として継続。
3. 2018-03-20〜04-01境界を当時カレンダー・業界記事・古いDBで最終監査。
4. 漏れがなければ **2018-04-02群OPEN**。最古候補 `押忍！番長A` をNo.1183候補として既存重複確認後、performance core + resetBehavior v0.7で処理。
5. 同日候補 `ガールズガンズグルービー` も後続処理し、同日全メーカー・別スペック・表記揺れを横断監査して群CLOSE判定。
6. 遡及QAは `2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1182 カンフーレディ・テトラ
- HAZUSE: https://hazuse.com/machine/pachislot/7S1214/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S1214/genre/201/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3132/1/68443
- パチマガスロマガ ボーナス確率: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/225/h.php
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/225/a.php
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/54991/
- P-WORLD: https://www.p-world.co.jp/machine/database/8605
- グリーンべると: https://web-greenbelt.jp/00010233/
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10000508/
- P-Summa 2018年3月新台まとめ: https://psumma.jp/trend/41810/
- 真パチスロ備忘録 2018導入日一覧: https://sin-surobi.com/dounyubi/23041/
- 5号機クロニクル 山佐: https://5goki.com/yamasa

### 次群先行確認
- 押忍！番長A: https://chonborista.com/slot/daito-slot/53886/
- 押忍！番長A K-Navi: https://p-kn.com/slot/2981/
- ガールズガンズグルービー: https://chonborista.com/slot/newgin-slot/55074/
