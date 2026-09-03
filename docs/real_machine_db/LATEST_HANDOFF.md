# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **438**
- latestMachineAdded: **マジカルハロウィン2**
- latestRecord: `docs/real_machine_db/machines/2010-01-05_magical-halloween2.md`
- chronologicalFrontier: **2010-01-05（導入日CONFLICT: 2010-01-05 / 2010-01-12）**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新437 `2009-12-14_basilisk-kouga-ninpouchou.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは437件 / chronologicalFrontier 2009-12-14。
- P-WORLD 2009年12月新台一覧のパチスロ6機種（哲也 新宿vs上野 / パチスロリッジレーサー2 / 炎の熱血教師 / 爆走列島 / 一騎当千2Brilliant Battle / バジリスク 甲賀忍法帖）を境界監査し、いずれも本線収録済みのため2009年12月を閉じ、2010年1月へ前進。
- 2010年1月群の最早候補として `マジカルハロウィン2` を監査。追加前repo検索で未登録、LATEST_HANDOFF再取得でも437件のままで競合なしを確認して438件目として追加。
- 導入日はHAZUSE 2010-01-05、パチビー/必勝本 2010-01-12、KPE公式は2010年1月（月精度）。平均化せずCONFLICT保持。

## 438 — マジカルハロウィン2 要約

- メーカー: **KPE**
- 型式: **マジカルハロウィン2A**
- 検定番号: **9S0947**
- 導入日: **CONFLICT — 2010-01-05 / 2010-01-12**
- 世代: **5号機**
- システム: **A+ART / CZ経由ストックART**
- BIG: **1/354.3 → 1/319.7**
- REG: **1/364.1 → 1/327.7**
- ボーナス合算: **1/179.6 → 1/161.8**
- 機械割: **96.6 / 98.8 / 101.2 / 104.5 / 108.3 / 113.1%**
- BIG約210枚 / REG約60枚
- ART「カボチャンス」: **1セット30G / 約+1.2枚/G**
- 通常天井: **1280G → スーパーカボチャンス**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

## resetBehavior v0.7

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。必勝本に本機専用「設定変更&天井情報」項目が存在し、KONAMI公式回顧Q&Aでも本機の「設定変更時の一枚絵」の存在を確認したが、1280G天井カウンタ・内部モード・ナビストック・CZ/ART状態の具体処理本文は未回収。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。天井進捗、モード、ナビストック、CZ/ART状態の保持範囲を本機固有資料で確定できず。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断時の天井進捗・内部状態処理の直接資料未回収。
- **gameCounterReset**: 通常1280G天井は確定。設定変更時のclear/retain/別値化は `UNVERIFIED_AFTER_RESEARCH`。
- **ceilingAfterReset**: 設定変更専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **mode/state**: 設定変更時の振分・保持は `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の数値恩恵・不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `PARTIAL_OFFICIAL_RETROSPECTIVE`。KONAMI公式開発Q&Aがマジハロ2の「設定変更時の一枚絵」の存在を明記。表示条件・タイミングは未確定。
- **公開朝一数値**: 設定変更専用モード振分・朝一当選率・リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- KONAMI機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2010/magihallo2/`
- KONAMI「まじおつ。」公式Q&A: `https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20200717.html`
- HAZUSE: `https://hazuse.com/machine/pachislot/9S0924/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5762`
- パチビー: `https://www.pachibee.jp/machines/index/209110011`
- K-Navi ART/CZ: `https://p-kn.com/slot/1096/14845/` / `https://p-kn.com/slot/1096/14844/`
- パチスロ必勝本: `https://p.hisshobon.jp/machine/1491/1/22442`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 今回は本線の2009年12月境界監査→2010年1月移行→438件目追加を優先。2006-10以降の「最初のresetBehavior欠損実ファイル」を安全に一意特定してから補完する方針を維持し、推測で別レコードをQA済みにしない。
- 次回QAはmachine tree/実ファイル順を再走査し、スロ原人直後の最初の `resetBehavior` 欠損機を1件以上補完する。

## 次回再開地点

1. **recordCount 438 / 2010年1月群へ移行済み**。
2. `マジカルハロウィン2` の導入日CONFLICT（1/5 vs 1/12）は保持。新資料が得られた場合のみ解消する。
3. 次の最有力候補は **パチスロ機動戦艦ナデシコ（SANKYO）**。HAZUSEで2010-01-11、SANKYO公式アーカイブで2010年1月を確認済み。repo既存検索→具体日境界監査→性能コア＋resetBehavior v0.7を収集して439件候補とする。
4. 同じ1月群では `夢幻の如く`（2010-01-12）、P-WORLD月次掲載の `ファイヤービーク`、`パチスロあしたのジョー`、`元祖!大江戸桜吹雪`、`島唄RXH-30`、`パチスロエイム`、`シオサー30` も具体導入日を別資料で確定して時系列配置する。
5. P-WORLD 2010年1月一覧には `ニュートリプルクラウン30` もあるが、K-Naviは2009-11-24導入を示すため、月次掲載月だけで2010年1月機として再追加しない。既存登録有無と導入日定義を監査する。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. 遡及QAはスロ原人直後の最初のresetBehavior欠損実ファイルから再開する。
