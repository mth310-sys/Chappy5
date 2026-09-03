# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **479**
- latestMachineAdded: **ファニーサンタ2**（タイヨー / 主値2010-04-18・導入日CONFLICT / 遡及補完）
- latestRecord: `docs/real_machine_db/machines/2010-04-18_funny-santa-2.md`
- chronologicalFrontier: **2010-04-19**
- frontierLatestMachine: **スパイガール**（主値2010-04-19）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前478「スパイガール」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **478** / chronologicalFrontier **2010-04-19**。
- 2010-04-19同日群→2010-04-20〜25境界を再監査中、当時グリーンべると2010-04-26記事に **「ファニーサンタ2」は4月18日にはパーラーに導入** とあることを確認。
- 旧HANDOFFではK-Naviの2010-04-26全国導入日を次候補としていたが、より古い当時業界一次寄り資料を得たため、repo未登録確認後に479件目として遡及補完。
- K-Naviは2010-04-26全国導入開始、メーカー協力アプリ資料は2010年4月発売。日付は平均せず `CONFLICT` として保持。
- P-WORLD、K-Navi、旧パチマガスロマガ、pacnk、当時グリーンべると、遊技通信転載、メーカー協力プレスリリースを横断し、性能コア＋v0.7 resetBehaviorを収集。

## 479 — ファニーサンタ2 要約

- メーカー: **タイヨー**
- 型式: **UNVERIFIED_AFTER_RESEARCH**
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入主値: **2010-04-18**
- releaseDate CONFLICT: **当時グリーンべると 2010-04-18実導入 / K-Navi 2010-04-26全国導入開始 / メーカー協力資料 2010年4月発売**
- 世代/タイプ: **5号機 / ノーマルAタイプ / 完全告知（絶対告知） / 技術介入**
- BIG: **1/268.59 → 1/229.95**
- REG: **1/464.79 → 1/284.94**
- 合算: **1/170.22 → 1/127.25**
- 50枚ベース: **34.29 / 34.60 / 34.88 / 34.66 / 34.91 / 35.31G**
- BIG: **MAX311枚**
- REG: **MAX103枚**
- 天井/ART/AT/CZ: **非搭載**
- PAYOUT: **CONFLICT**
  - P-WORLD/pacnk系列: **97.2 / 98.7 / 100.5 / 102.5 / 105.4 / 108.6%**
  - 旧パチマガスロマガ・シミュレート: **96.99 / 98.64 / 100.48 / 102.67 / 105.87 / 109.27%**
- coreStatus: **COMPLETE_CORE_RESET_NO_PERSISTENT_PROGRESS_RELEASEDATE_CONFLICT_MODEL_UNVERIFIED**

## resetBehavior v0.7 — ファニーサンタ2

- **設定変更**: 天井・ART/AT/CZ・周期モードがないため、朝一客行動へ影響する持続ゲーム数進捗/天井/モードの設定変更処理は `NOT_APPLICABLE` 相当。低レベル内部処理は直接資料未確認のため推測しない。
- **据え置き**: 引継ぎ対象となる天井ゲーム数・周期・ART/AT/CZモードなし。低レベル処理は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 天井/周期/モードに関する差は対象機能なし。低レベルRAM/成立フラグ処理は `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数・天井**: P-WORLDとpacnkで **天井機能/天井RT非搭載**を確認。`gameCounterReset=NOT_APPLICABLE`、`ceilingAfterReset=NOT_APPLICABLE`。
- **モード・状態**: 朝一に持ち越す通常モード/周期モード/ART状態なし。`NOT_APPLICABLE_FOR_PERSISTENT_GAMEPLAY_MODE`。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 設定変更専用の高確、短縮天井、朝一当選率優遇、天井進捗消失等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン・初期出目・告知ランプ等を使う本機固有の変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: リセット固有数値なし。
- resetBehaviorQA: **RESET_RELEVANT_GAME_COUNT_CEILING_MODE_NOT_APPLICABLE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- グリーンべると「タイヨー、民事再生法手続き申請へ」: `https://web-greenbelt.jp/00002631/`
- K-Navi「ファニーサンタ2」: `https://p-kn.com/slot/1184/`
- K-Navi「2010年4月 新台導入カレンダー」: `https://p-kn.com/calendar/201004/`
- P-WORLD「ファニーサンタ2」: `https://www.p-world.co.jp/machine/database/5902`
- パチマガスロマガ旧攻略 ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/h.php`
- パチマガスロマガ旧攻略 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/c.php`
- パチマガスロマガ旧攻略トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/71/taiyo_slot_71.php`
- pacnk「ファニーサンタ2」: `https://pacnk.com/slot/tools/sh_funnysanta.html`
- @Press メーカー協力アプリ資料: `https://www.atpress.ne.jp/news/15709`
- 遊技通信記事転載（2010-03-25）: `https://p-mans.blogspot.com/2010/03/`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規収集を止めず、次回QAでスロ原人直後の最初のresetBehavior欠損実ファイルを日付順/コミット履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 479 / chronologicalFrontier 2010-04-19**。479は前線より古い2010-04-18の遡及補完なので、前線日は進めない。
2. **2010-04-19同日群はK-Naviカレンダー上のパチスロ本線が既存「2027II NEO」中心で、スパイガールは日付CONFLICTとして既に478で補完済み。メーカー別一覧/当時業界記事をもう一段確認して閉じる。**
3. その後 **2010-04-20〜25** を具体導入日順に境界監査。現時点のK-Navi月間カレンダーではパチスロ追加日なしだが、月精度資料・地域先行導入漏れを当時記事で再確認する。
4. 境界を閉じた後の次の全国具体日候補は **2010-04-26**。旧候補「ファニーサンタ2」は今回479として処理済みなので重複追加しない。
5. **2010-04-26同日/近接日の別未登録パチスロ**をK-Navi、P-WORLD、当時業界記事、メーカー別一覧で洗い出し、最古の未処理機から480件目を処理する。
6. **ファニーサンタ2導入日CONFLICT**（2010-04-18 vs 2010-04-26）は保持。メーカー一次の納品開始/全国販売資料が得られた場合のみ主値再判定。
7. **スパイガール導入日CONFLICT**（K-Navi 2010-02-22 vs 主値2010-04-19）と **神人 八犬伝導入日CONFLICT**（K-Navi 2010-04-12 vs 当時資料2010-04-19）も維持。
8. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
