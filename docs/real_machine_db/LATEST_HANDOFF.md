# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **444**
- latestMachineAdded: **島唄RXH-30**
- latestRecord: `docs/real_machine_db/machines/2009-11-15_shimauta-rxh-30.md`
- chronologicalFrontier: **2010-01-12**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、正本ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新443 `2010-01_pachislot-aim.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは443件 / chronologicalFrontier 2010-01-12 / latestMachineAdded パチスロエイム。
- 直前handoffで再探索指定されていた `島唄RXH-30` を最優先監査。
- repo検索で `島唄RXH-30` / `9S0632` の既存レコードなしを確認。既存 `島唄R`（9S0569 / 25Φ）とは別型式。
- P-WORLDは本機を30Φ・検定9S0632・導入開始2010年1月として掲載。一方、2009年11月リリース資料と中古流通系2009-11-15日付が存在するため、導入時期は `CONFLICT` のまま独立レコード化。
- 遡及追加扱いのため chronologicalFrontier は **2010-01-12のまま維持**。

## 444 — 島唄RXH-30 要約

- メーカー: **オリンピア**
- 型式: **島唄RXH-30**
- 検定番号: **9S0632**
- 導入時期: **CONFLICT — 2009-11-15 / 2009-11リリース / P-WORLD 2010-01導入開始**
- 世代: **5号機**
- システム: **ボーナス+ART / 30Φ**
- ART「フグRUSH」: **35G/セット、約+1.5枚/G**（HAZUSE）
- 天井: **通常1200Gで次回ボーナスまでART**
- もう一つの救済: **ボーナス後ART非突入9回連続で、次回ボーナス後ART2個以上確定**
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**

## 性能コアの主要CONFLICT

### 機械割
- HAZUSE: **95.6 / 98.2 / 101.3 / 104.7 / 107.5 / 110.2%**
- 別回顧系列: **96.0 / 98.5 / 101.2 / 104.1 / 106.6 / 109.2%**
- 5号機クロニクル: **95.8 / 98.5 / 101.4 / 104.1 / 107.3 / 109.2%**
- 平均せず `CONFLICT` 保持。

### BIG / REG / 合算
- HAZUSE BIG: **1/443 → 1/407**、REG **1/570 → 1/512**、合算 **1/249 → 1/227**
- P-WORLD BIG: **1/443 → 1/362**、REG **1/570 → 1/443**、合算 **1/249 → 1/199**
- 高設定側の差が大きいため `CONFLICT`。別スペック/データ混入の可能性を残し、主値へ統合しない。

### ART基本性能
- HAZUSE: **フグRUSH 35G / 約+1.5枚/G**
- 後年5号機クロニクル: **50G / 約+1.2枚/G**
- 当時解析寄りのHAZUSEを主記録にしつつ、後者は `CONFLICT` として分離。

## resetBehavior v0.7 — 島唄RXH-30

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`（1200G天井 / 9回非突入カウンタの変更時処理を確定できず）
- **ceilingAfterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）
- **朝一恩恵/不利**: `NONE_CONFIRMED_AFTER_RESEARCH`
- **変更判別**: `CONFLICT_LOW_CONFIDENCE_COMMUNITY_ONLY`
- **公開朝一数値**: `NONE_CONFIRMED_AFTER_RESEARCH`
- P-WORLD当時掲示板では設定変更/確認時パトランプが「回らない」とする投稿と「回る」とする反論が競合。公式/解析裏付けがないため変更判別仕様として採用せず、CONFLICTだけ残した。

## 主要出典（取得日 2026-09-03）

- HAZUSE 島唄RXH-30: `https://hazuse.com/machine/pachislot/9S0632/`
- P-WORLD 島唄RXH-30: `https://www.p-world.co.jp/machine/database/5803`
- 2009年11月回顧資料: `https://pachinko.hatenablog.jp/entry/2009/11/shimauta-R`
- 中古機相場.com オリンピア履歴: `https://www.p-souba.com/2_61_25.htm`
- 5号機クロニクル 平和＆オリンピア: `https://5goki.com/heiwa-olympia`
- P-WORLD 島唄シリーズ掲示板: `https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p5734`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、QAリレー時にその直後の最初のresetBehavior欠損実ファイルから補完する。

## 次回再開地点

1. **recordCount 444 / chronologicalFrontier 2010-01-12**。島唄RXH-30は導入時期CONFLICTを保持した遡及独立レコードとして追加済み。
2. **2010-01-13〜01-24境界監査を継続**。P-WORLD 2010年1月パチスロ一覧と当時業界記事を照合し、他の未処理具体日機がないか閉じる。
3. `パチスロあしたのジョー` は **2010-01-25ホールデビュー**確認済み。1/13〜1/24を閉じた後の次具体日候補。
4. `シオサー-30` はパイオニア公式で **2010-02-01** 確定済み。1月へ追加しない。
5. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため再追加しない。
6. `ファイヤービーク` の正式具体導入日を一次/当時業界資料で発見した場合のみ既存 `2010-01_firepeak.md` を更新する。
7. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
8. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
