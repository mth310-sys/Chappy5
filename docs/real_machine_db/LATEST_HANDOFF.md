# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **478**
- latestMachineAdded: **スパイガール**（KPE / 主値2010-04-19・導入日CONFLICT）
- latestRecord: `docs/real_machine_db/machines/2010-04-19_spy-girl.md`
- chronologicalFrontier: **2010-04-19**
- frontierLatestMachine: **スパイガール**（主値2010-04-19）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前477「2027II NEO」を再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本は recordCount **477** / chronologicalFrontier **2010-04-19**。
- LATEST_HANDOFF指定の最優先境界監査対象「スパイガール」（KPE）をrepo検索し未登録確認後、478件目として追加。
- 導入日はK-Navi **2010-02-22** vs パチビー **2010-04-19** / PachiNavi・pacnk **2010年4月**で競合。2010-02-05時点のKPE内覧会記事も確認したが、メーカー一次の納品開始日までは回収できず、主値2010-04-19を暫定採用し `CONFLICT` を保持。
- P-WORLD、K-Navi、旧パチマガスロマガ、パチビー、現行整理DB、当時内覧会資料を横断し、性能コア＋v0.7 resetBehaviorを収集。

## 478 — スパイガール 要約

- メーカー: **KPE**
- 型式: **スパイガールG**
- 検定番号: **9S1008**
- 導入主値: **2010-04-19（暫定）**
- releaseDate CONFLICT: **K-Navi 2010-02-22 / パチビー 2010-04-19 / 複数DB 2010-04**
- 世代/タイプ: **5号機 / ボーナス＋完走型ART / 周期CZ / トリプルストック**
- PAYOUT: **96.6 / 98.5 / 101.6 / 104.5 / 108.4 / 112.9%**
- BIG: **1/368.2 → 1/327.7**
- REG: **1/394.8 → 1/346.8**
- ボーナス合算: **1/190.5 → 1/168.5**
- 設定別ART初当たり: **UNVERIFIED_AFTER_RESEARCH**
- 50枚ベース: **32.7G**
- BIG: **約203枚**
- REG: **約50枚**
- ART「大作戦タイム」: **30G / 約+1.4枚/G**
- 標準天井/CZ: **通常時333GごとにCZ、3回目CZは押し順ナビ発生＝ART確定**
- coreStatus: **COMPLETE_CORE_EXCEPT_ART_INITIAL_RESET_PARTIAL_RELEASEDATE_CONFLICT**

## resetBehavior v0.7 — スパイガール

- **設定変更**: K-Naviに本機専用「設定変更後の挙動は?」項目の存在までは確認したが本文の具体処理を回収できず。333G周期進捗/CZ回数、ART各ストック、内部状態の処理は `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 周期/CZ回数・ストック・状態の引継ぎを直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 周期/CZ回数・ストック・状態の保持/初期化を直接確定できず `UNVERIFIED_AFTER_RESEARCH`。
- **ゲーム数/天井**: 標準仕様として **333G周期CZ、3回目CZでART確定**。ただし設定変更時リセット/引継ぎは `UNVERIFIED_AFTER_RESEARCH`。
- **リセット短縮**: 設定変更専用の短縮周期/別天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **モード/状態**: フリーウェイ/クライマックス等は確認済みだが、変更時の初期再抽選・振り分けは未確認。
- **有利区間**: `NOT_APPLICABLE`。
- **朝一恩恵/不利**: 設定変更専用の確定恩恵/不利は `NONE_CONFIRMED_AFTER_RESEARCH`。通常333G周期を朝一恩恵として扱わない。
- **変更判別**: ガックン、初期出目、液晶/ランプ、周期挙動等は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: リセット固有数値は確認なし。
- resetBehaviorQA: **SETTING_CHANGE_CARRYOVER_POWER_CYCLE_GAME_COUNTER_MODE_STATE_DETECTION_UNVERIFIED_AFTER_RESEARCH**

## 主要出典（取得日 2026-09-03）

- パチビー「スパイガール」: `https://www.pachibee.jp/movies/index/2379`
- K-Navi「スパイガール」: `https://p-kn.com/slot/1138/`
- P-WORLD「スパイガール」: `https://www.p-world.co.jp/machine/database/5832`
- パチマガスロマガ旧攻略 50枚ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/19/c.php`
- K-Navi「ボーナスの種類」: `https://p-kn.com/slot/1138/17878/`
- PachiNavi「スパイガール」: `https://pachinavi.net/machines/spy-girl/`
- pacnk「スパイガール」: `https://pacnk.com/slot/tools/sh_spygirl.html`
- アサガヲBlog 2010-02-05内覧会試打: `https://blog.livedoor.jp/asagawoblog/archives/99328.html`

## resetBehavior 遡及QA進捗

- 既存遡及補完は **スロ原人（`docs/real_machine_db/machines/2006-10_surogenjin.md`）まで補完済み**という正本進捗を維持。
- 新規収集を止めず、次回QAでスロ原人直後の最初のresetBehavior欠損実ファイルを日付順/コミット履歴から一意特定して再開する。

## 次回再開地点

1. **recordCount 478 / chronologicalFrontier 2010-04-19**。
2. **2010-04-19同日群を最終監査**し、K-Naviカレンダー、P-WORLD、当時業界記事、メーカー別一覧で未登録機がないか確認する。
3. 同日群を閉じた後、**2010-04-20〜25**を具体導入日順に境界監査する。
4. 次の具体日候補は **2010-04-26「ファニーサンタ2」（タイヨー）**。repo重複確認後、より古い未処理機がなければ479件目候補とする。
5. **スパイガール導入日CONFLICT**は未解消。メーカー一次/当時納品開始資料を後続QAで得た場合のみ主値を再判定する。K-Navi 2010-02-22を削除しない。
6. **神人 八犬伝導入日CONFLICT**（K-Navi 2010-04-12 vs 当時資料2010-04-19）も保持。一次/メーカー納品資料が得られた場合のみ主値を再判定する。
7. 次回追加前も必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコード / main状態を再取得し、他リレー競合・重複を防ぐ。
