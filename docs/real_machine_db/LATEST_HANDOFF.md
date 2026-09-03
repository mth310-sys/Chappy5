# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **442**
- latestMachineAdded: **元祖!大江戸桜吹雪**
- latestRecord: `docs/real_machine_db/machines/2010-01-11_ganso-oedo-sakurafubuki.md`
- chronologicalFrontier: **2010-01-12**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新441 `2010-01_firepeak.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは441件 / chronologicalFrontier 2010-01-12 / latestMachineAdded ファイヤービーク。
- HANDOFF指定の2010-01-13〜01-24境界候補を再探索。月精度候補 `元祖!大江戸桜吹雪` は、当時グリーンべるとで **2010-01-11納品開始**、HAZUSE DATAで **2010-01-11導入開始日** を直接確認したため、chronologicalFrontierより1日早い遡及漏れと判定。
- 追加直前に想定レコードパスが404で未登録、LATEST_HANDOFFも441件のままであることを再取得してリレー競合なしを確認し、442件目として追加。
- 遡及追加のため chronologicalFrontier は **2010-01-12のまま維持**。

## 442 — 元祖!大江戸桜吹雪 要約

- メーカー: **平和**
- 型式: **元祖！大江戸桜吹雪Z**
- 検定番号: **9S0827**
- 導入開始: **2010-01-11**（グリーンべると＝納品開始、HAZUSE＝導入開始日）
- 世代: **5号機**
- システム: **A+ART / 30GセットART / 次回ボーナスまでの上位ART / 二段階天井**
- 機械割: **96.5 / 98.4 / 101.1 / 103.8 / 107.3 / 110.2%**
- BIG: **1/458.30 → 1/385.50**
- REG: **1/712.40 → 1/595.80**
- 合算: **1/279 → 1/234**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**（当時個人実戦の「1k=40以上はありそう」は体感値なので不採用）
- BIG: **約252枚**
- REG: **約48枚**
- ART「桜満開モード」: **1セット30G / 約+1.3枚/G**
- 「超桜満開モード」: **次回ボーナスまで継続**
- 天井A: **ボーナス間1080G → 次回ボーナス後ART確定**
- 天井B: **通常時1460G → 無限ART、次回ボーナスまで**

## resetBehavior v0.7

- **設定変更**: `PARTIALLY_CONFIRMED`。pacnk本機専用解析で、1080G側天井進捗は設定変更でリセット、1460G側無限ART天井ゲーム数は設定変更でも引継ぎ。
- **据え置き**: `PARTIALLY_CONFIRMED`。2010-01-15当時実戦記事で「宵越し910G」を無限ART天井狙いとして実戦しているが、全内部状態の保持までは断定しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断時の二つの天井カウンタ・内部状態・ARTストックの処理を直接確定できず。
- **gameCounterReset**: `MIXED_CONFIRMED`。1080G側は変更でリセット、1460G側は変更でも引継ぎ。
- **ceilingAfterReset**: リセット専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。二つの通常天井の進捗処理差を保持。
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: 1460G側の進捗が設定変更でも消えない点のみ確認。専用優遇率・短縮天井は確認できず。
- **朝一不利**: 設定変更で1080G側進捗が消える点を確認。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶/好機モード/ランプ等まで再探索したが直接根拠を確定できず。
- **公開朝一数値**: 設定変更専用モード振り分け、朝一当選率、リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 重要な資料差・注意

- 無限ART天井はP-WORLDが1460G、2010-01-15当時実戦記事が1500G。主値はP-WORLDの1460G、1500Gは当時の丸め/俗称差として保持。
- 後年5号機クロニクルにはREG約104枚、ART50G/+1.5枚等の本機と整合しない記述があり、P-WORLD・当時グリーンべると・K-NaviのREG約48枚、30G/+1.3枚と明確に競合するため性能値には採用しない。

## 主要出典（取得日 2026-09-03）

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/3725/greenbelt`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5793`
- HAZUSE DATA: `https://data.hazuse.com/?machine_code=9S0827`
- pacnk: `https://pacnk.com/slot/tools/sh_gansoooedosakura.html`
- K-Navi: `https://p-kn.com/slot/1123/direct/`
- 2-9伝説（2010-01-15当時実戦）: `https://2-9densetsu.com/blog-entry-93.html/`
- 5号機クロニクル（不整合確認用）: `https://5goki.com/heiwa-olympia`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、次回QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルを安全に一意特定して補完する。

## 次回再開地点

1. **recordCount 442 / chronologicalFrontier 2010-01-12**。元祖!大江戸桜吹雪は2010-01-11の遡及漏れとして補完済み。
2. 引き続き **2010-01-13〜01-24境界監査**。残る月精度候補 `島唄RXH-30`、`パチスロエイム`、`シオサー-30` の具体導入日を当時資料・旧DB・実戦時系列で再探索し、repo既存確認後に最古の未処理機から追加する。
3. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため再追加しない。
4. `パチスロあしたのジョー` は当時業界資料で **2010-01-25ホールデビュー**確認済み。1/13〜1/24の未処理を閉じた後の具体日候補。
5. `ファイヤービーク` の正式具体導入日を一次/当時業界資料で発見した場合は `2010-01_firepeak.md` を更新する。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
