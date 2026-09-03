# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **443**
- latestMachineAdded: **パチスロエイム**
- latestRecord: `docs/real_machine_db/machines/2010-01_pachislot-aim.md`
- chronologicalFrontier: **2010-01-12**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新442 `2010-01-11_ganso-oedo-sakurafubuki.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは442件 / chronologicalFrontier 2010-01-12 / latestMachineAdded 元祖!大江戸桜吹雪。
- 2010-01-13〜01-24境界の月精度候補 `島唄RXH-30`、`パチスロエイム`、`シオサー-30` を再探索。
- `シオサー-30` はパイオニア公式2010-01-12リリースPDFで **九州地区ホール導入開始2010-02-01** と明記され、1月候補から除外して2月1日へ移動。
- `島唄RXH-30` は2009年11月リリースとする当時/回顧系資料と、2010年1月導入とするP-WORLD/回顧DBが競合。具体日未確定のため、今回のchronologicalFrontierを進める根拠には使用しない。
- `パチスロエイム` はP-WORLD個別ページ・2010年1月新台スケジュール・RT分類、補助DBを横断し、オルカ / 型式名パチスロエイム / 検定9S1053 / 5号機RT / 2010年1月導入を確認。性能値・resetBehaviorは検索語と資料系統を変えても直接値を確定できず、443件目としてPARTIAL_AFTER_EXTENSIVE_RESEARCHで追加。
- P-WORLD掲示板には2010-01-21時点の本機投稿があるが、投稿日時を導入開始日に格上げしない。
- 月精度追加のため chronologicalFrontier は **2010-01-12のまま維持**。

## 443 — パチスロエイム 要約

- メーカー: **オルカ**
- 型式: **パチスロエイム**
- 検定番号: **9S1053**
- 導入開始: **2010年1月（月精度）**
- 世代: **5号機**
- システム: **RT**（P-WORLD分類）
- 機械割: **UNVERIFIED_AFTER_RESEARCH**
- 主要初当たり: **UNVERIFIED_AFTER_RESEARCH**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**
- RT純増: **UNVERIFIED_AFTER_RESEARCH**
- 基本獲得枚数: **UNVERIFIED_AFTER_RESEARCH**
- P-WORLD機種本文自体が「備考 調査中」で、現存する性能コア情報が極めて少ない。

## resetBehavior v0.7 — パチスロエイム

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **ceilingAfterReset**: `UNVERIFIED_AFTER_RESEARCH`（通常天井自体も直接確定できず）
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`
- 検索は機種名だけで終わらず、`オルカ / 9S1053 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 天井 / 天井短縮 / モード / RT / ガックン / 初期出目 / ランプ / 変更判別` を組み替えて実施。

## 今回の重要な境界修正

### シオサー-30
- パイオニア公式PDF（平成22年1月12日）で型式 **シオサイVZ-30**、九州限定発売、BIG純増MAX322枚、REG純増MAX151枚を確認。
- 同PDFに **2010-02-01（月）九州地区ホール導入開始** と明記。
- よって2010年1月機として先行追加しない。2月1日の正規候補として保持。

### 島唄RXH-30
- P-WORLDは2010年1月群に掲載。
- 2009年11月資料には型式 `島唄 RXH-30`、2009年11月リリース、A+ARTとして掲載されるものがある。
- 後年5号機クロニクルも島唄系で記述混入が疑われる箇所があり、単独で導入年を決めない。
- 次回はオリンピア当時ニュース、HAZUSE/K-Navi等の旧DB、2009年11月〜2010年1月の店舗導入痕跡を追加探索してCONFLICTを解消または正式保持する。

## 主要出典（取得日 2026-09-03）

- P-WORLD パチスロエイム: `https://www.p-world.co.jp/machine/database/5844`
- P-WORLD 2010年1月新台スケジュール: `https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?type=Slot&year_month=2010-01`
- P-WORLD RT機種一覧: `https://www.p-world.co.jp/_machine/t_machine.cgi?aflag=&key=RT&mode=slot_type&start=100`
- パチスロ実機相場ナビ パチスロエイム: `https://blog-pachislot.com/machines/1756.html`
- パイオニア公式 シオサー-30リリースPDF: `https://www.slot-pioneer.co.jp/information/pdf/pioneer_siosar-30_100115.pdf`
- P-WORLD 島唄RXH-30: `https://www.p-world.co.jp/machine/database/5803`
- 島唄RXH-30 2009年11月資料: `https://pachinko.hatenablog.jp/entry/2009/11/shimauta-R`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 443 / chronologicalFrontier 2010-01-12**。パチスロエイムは2010年1月の月精度レコードとして追加済み。
2. **2010-01-13〜01-24境界監査を継続**。`島唄RXH-30` の2009-11 / 2010-01導入CONFLICTを一次/当時資料で再探索し、具体導入時期を確定できれば遡及追加する。
3. 1/13〜1/24に他の未処理具体日機がないか、P-WORLD月間10機種一覧と当時業界記事を照合して閉じる。
4. `パチスロあしたのジョー` は **2010-01-25ホールデビュー**確認済み。1/13〜1/24を閉じた後の次具体日候補。
5. `シオサー-30` は **2010-02-01** と公式確定。1月へ追加しない。
6. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため再追加しない。
7. `ファイヤービーク` の正式具体導入日を一次/当時業界資料で発見した場合のみ既存 `2010-01_firepeak.md` を更新する。
8. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
9. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
