# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **440**
- latestMachineAdded: **夢幻の如く**
- latestRecord: `docs/real_machine_db/machines/2010-01-12_mugen-no-gotoku.md`
- chronologicalFrontier: **2010-01-12**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- GitHub最新mainの `README.md`、最新ミッション `CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、最新439 `2010-01-11_kidou-senkan-nadesico.md` を再読。
- INDEXは旧19件地点のためREADME規定どおり進捗正本には使わず、LATEST_HANDOFF＋実レコードを優先。
- 開始時mainは439件 / chronologicalFrontier 2010-01-11。
- HANDOFF指定の次候補 `夢幻の如く` をrepo検索し、未登録を確認。追加直前にLATEST_HANDOFFを再取得して439件地点のままであることも確認し、リレー競合なし。
- K-Naviとパチビーが2010-01-12導入を明示。IGTジャパン機として440件目に追加。

## 440 — 夢幻の如く 要約

- メーカー: **IGTジャパン**
- 型式: **ユメマボロシノゴトクY7**（中古実機資料による。公的検定資料未回収のため信頼度低め）
- 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- 導入日: **2010-01-12**
- 世代: **5号機**
- システム: **A+ART / CZ / ゲーム数・連続敗北救済**
- 機械割: **97.80 / 99.65 / 102.83 / 105.22 / 108.17 / 110.48%**
- 覇王BONUS: **1/5957.82 → 1/4681.14**
- 出航BONUS: **1/91.02 → 1/87.38**
- ボーナス合算: **1/89.65 → 1/85.78**
- 50枚ベース: **33.77 / 33.88 / 34.10 / 34.32 / 34.55 / 35.59G**
- ART「夢幻RUSH」: **基本30G / 約+1.7枚/G / 最大900G上乗せ**
- 覇王BONUS: **約145〜148枚**
- 出航BONUS: **約48枚**
- 通常救済: **通常状態600G消化 → 次回ボーナス後ART確定**
- 別救済: **合戦チャンス13連続敗北 → 次回ボーナス後ART確定**

## resetBehavior v0.7

- **設定変更**: `GAME_COUNTER_CLEAR_CONFIRMED`。本機専用解析に「設定変更時、天井までのゲーム数はクリアされる」と明記されており、通常600G救済進捗のクリアを確定。
- **据え置き**: `PARTIAL_INFERRED_FROM_DIRECT_SETTING_CHANGE_SPEC`。設定変更時のみ600G進捗がクリアされる直接記述から、設定変更を伴わない据え置きでは600G進捗を利用する運用価値が残ると扱う。ただし13連敗カウンタ、内部状態、CZ/ART状態の保持範囲は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: `UNVERIFIED_AFTER_RESEARCH`。単純電断時の600G進捗、13連敗、内部状態の本機固有本文を確定できず。
- **gameCounterReset**: `RESET_ON_SETTING_CHANGE`。通常600G救済進捗は設定変更でクリア。
- **ceilingAfterReset**: `NORMAL_600G_FROM_ZERO`。設定変更専用の短縮天井は確認できず、通常600G救済を0Gから再計数。13連敗救済の設定変更時処理は未確認。
- **modeAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。設定変更専用モード振り分けの本文を回収できず、通常時のモード解析値を転用しない。
- **stateAfterReset**: `UNVERIFIED_AFTER_RESEARCH`。高確/低確、合戦チャンス、ART状態等は600Gカウンタ以外未確定。
- **有利区間**: `NOT_APPLICABLE`（5号機・制度前）。
- **朝一恩恵**: `NONE_CONFIRMED_AFTER_RESEARCH`。リセット短縮天井・朝一専用ART優遇は確認できない。
- **朝一不利**: `600G_CEILING_PROGRESS_LOST`。前日の通常時ハマリは設定変更で600G救済進捗が消える。
- **変更判別**: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、ステージ、液晶、ランプ等を含め再探索したが、本機固有の直接根拠を確定できず。
- **公開朝一数値**: 設定変更専用モード振り分け、朝一当選率、リセット恩恵率は `NONE_CONFIRMED_AFTER_RESEARCH`。通常救済600Gと13連敗救済のみ確定。

## 重要な資料差

- 覇王BONUS実獲得は旧パチマガ約145枚、P-WORLD/パチビー約148枚。216枚超払い出し終了という規定は整合するため、実獲得目安の丸め差として両方保持。
- 型式 `ユメマボロシノゴトクY7` は中古実機販売資料で確認。公的検定資料を直接回収できていないため、検定番号は推測せず `UNVERIFIED_AFTER_RESEARCH`。

## 主要出典（取得日 2026-09-03）

- K-Navi: `https://p-kn.com/slot/1101/`
- パチマガスロマガ 基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/a.php`
- パチマガスロマガ ボーナス/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/h.php`
- パチマガスロマガ 1000円あたりG数: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/igt_slot/54/c.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5764`
- パチビー: `https://www.pachibee.jp/machines/index/209110013`
- crankyseven: `https://crankyseven.com/yumemaborosi-pc.htm`
- A-SLOT中古実機: `https://www.a-slot.com/SHOP/igt11.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 本線新規収集を止めず、次回QAでスロ原人直後の最初の `resetBehavior` 欠損実ファイルを安全に一意特定して補完する。

## 次回再開地点

1. **recordCount 440 / chronologicalFrontier 2010-01-12**。
2. まず **2010-01-13〜01-24の境界監査**を行う。月精度候補の `ファイヤービーク`、`元祖!大江戸桜吹雪`、`島唄RXH-30`、`パチスロエイム`、`シオサー-30` 等は、具体導入日を当時資料・別DBで確定し、repo既存検索を行ってから日付順に配置する。
3. `パチスロあしたのジョー` は当時業界資料で **2010-01-25ホールデビュー**確認済み。1/13〜1/24に未処理機がなければ次の具体日候補とする。
4. `ニュートリプルクラウン30` はK-Naviが2009-11-24導入を示すため、2010年1月月次一覧だけを根拠に再追加しない。既存登録有無と導入日定義を監査する。
5. 追加前に必ずrepo既存検索＋LATEST_HANDOFF再取得を行い、重複・他リレー競合を防ぐ。
6. `マジカルハロウィン2` の導入日CONFLICT（2010-01-05 / 2010-01-12）は新しい一次資料が得られた場合のみ解消する。