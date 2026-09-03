# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **441**
- latestMachineAdded: **ファイヤービーク**
- latestRecord: `docs/real_machine_db/machines/2010-01_firepeak.md`
- chronologicalFrontier: **2010-01-12**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新440 `2010-01-12_mugen-no-gotoku.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは440件 / chronologicalFrontier 2010-01-12。
- HANDOFF指定の2010-01-13〜01-24境界候補を監査。月精度候補 `ファイヤービーク` をrepo検索し未登録確認。
- P-WORLD、旧パチマガスロマガ、K-Navi、当時遊技通信系再録、検定回顧資料を横断。性能コアは十分確定した一方、正式な具体ホール導入日は2010年1月までしか高信頼確定できなかった。
- P-WORLD本機掲示板には2010-01-05時点の実戦投稿が残るため、少なくとも月後半候補として後回しにするより **1月前半の遡及漏れ** として収録する方が漏れ防止上安全と判断。ただしユーザー投稿を正式導入日には採用せず `releaseDate: 2010-01（具体日UNVERIFIED_AFTER_RESEARCH）` とした。
- 追加直前にrepo再検索＋LATEST_HANDOFF再取得を行い440件地点のままであることを確認し、リレー競合なし。441件目として追加。
- 具体導入日が未確定の遡及追加のため chronologicalFrontier は **2010-01-12のまま維持**。

## 441 — ファイヤービーク 要約

- メーカー: **コルモ**
- 型式: **ファイヤービーク**
- 検定番号: **9S0789**（P-WORLD）
- 導入時期: **2010年1月 / 具体日UNVERIFIED_AFTER_RESEARCH**
- 世代: **5号機**
- システム: **A+ART / 状態管理ART / ボーナス間1200G天井高確**
- 機械割: **97.03 / 98.75 / 100.53 / 103.35 / 106.28 / 110.07%**
- BIG: **1/399.61 → 1/327.68**
- REG: **1/630.15 → 1/512.00**
- ボーナス合算: **1/244.54 → 1/199.80**
- 50枚ベース: **全設定共通35.70G**
- ART「ファイヤーラッシュ」: **約+1.5枚/G / 約1/40の終了抽選まで継続**
- スーパーファイヤーラッシュ: **次回ボーナスまで継続**
- BIG: **約210〜216枚**
- REG: **約60枚**
- ART抽選状態: **通常 / 高確 / 超高確**
- 通常天井: **ボーナス間1200G到達後、スイカ/1枚役で高確or超高確へ移行**

## resetBehavior v0.7

- **設定変更**: `UNVERIFIED_AFTER_RESEARCH`。旧パチマガに本機専用「攻め時・ヤメ時・設定変更時」項目の存在までは確認したが、1200G進捗や内部状態処理の本文を確定回収できず。
- **据え置き**: `UNVERIFIED_AFTER_RESEARCH`。1200G進捗、通常/高確/超高確、ART状態の保持範囲を直接確定できない。設定変更時処理から逆算しない。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断時の1200G進捗・内部状態・ART状態の本機固有記述を確認できず。
- **gameCounterReset**: `UNVERIFIED_AFTER_RESEARCH`。通常の1200G天井条件のみ確定。
- **ceilingAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。リセット短縮天井/変更値は確認できない。
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。通常/高確/超高確の通常時3状態は確定するが、変更時振り分けは未回収。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、液晶/ステージ/ランプ/音まで再探索したが本機固有の直接根拠を確定できず。通常時の音による状態示唆は変更判別と混同しない。
- **公開朝一数値**: 設定変更専用モード振り分け、朝一当選率、短縮天井、リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。

## 重要な資料差・注意

- BIG実獲得はP-WORLD/当時遊技通信系で約210枚、旧パチマガで約216枚。306枚払い出し終了という規定と両立する実獲得目安差なので双方保持。
- 導入時期は複数DBで2010年1月一致。ただし具体日は高信頼資料で未確定。P-WORLD掲示板の2010-01-05実戦投稿は境界判断の補助にのみ使用し正式日には採用しない。
- 検定通過は回顧資料で2009-10-19、P-WORLD検定番号9S0789と整合。

## 主要出典（取得日 2026-09-03）

- P-WORLD: `https://www.p-world.co.jp/machine/database/5772`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/a.php`
- パチマガスロマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/c.php`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/h.php`
- パチマガスロマガ 機種INDEX: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/colmo_slot/06/colmo_slot_06.php`
- K-Navi: `https://p-kn.com/slot/1106/direct/`
- Pマンズ（遊技通信再録）: `https://p-mans.blogspot.com/2009/11/`
- コルモ検定通過機種回顧: `https://q-and-a.hatenablog.com/archive/2016/10/23`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、次回QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルを安全に一意特定して補完する。

## 次回再開地点

1. **recordCount 441 / chronologicalFrontier 2010-01-12**。ファイヤービークは具体日未確定の1月前半遡及レコードとして追加済み。
2. 引き続き **2010-01-13〜01-24境界監査**を行う。残る月精度候補 `元祖!大江戸桜吹雪`、`島唄RXH-30`、`パチスロエイム`、`シオサー-30` の具体導入日を当時資料・別DB・実戦時系列で再探索し、repo既存検索後に最古の未処理機から追加する。
3. `ニュートリプルクラウン30` は既存2009-11-24レコードがあるため2010年1月月次一覧だけを根拠に再追加しない。
4. `パチスロあしたのジョー` は当時業界資料で **2010-01-25ホールデビュー**確認済み。1/13〜1/24の未処理を閉じた後の具体日候補。
5. ファイヤービークの正式具体導入日を一次/当時業界資料で発見した場合は `2010-01_firepeak.md` のreleaseDateを更新し、必要なら時系列注記を修正する。
6. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
7. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。
