更新日: 2026-09-10

## 現在地点
- recordCount: **1140**
- latestRecordAdded: **盗忍！剛衛門**（大都技研）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_tounin-goemon.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **盗忍！剛衛門 — No.1140**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1139「SLOT魁!!男塾〜目指せ！闘宴大武會〜」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1139件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「盗忍！剛衛門」** を重複確認後、performance core + resetBehavior v0.7を収集し **No.1140** としてmainへ保存。
- 大都技研製、2017-09-19導入をグリーンべると、P-WORLD、一撃、パチビー、ちょんぼりすた、当時解析等で照合。
- 正式型式は **`番長外伝 盗忍！剛衛門／A8`** をcanonicalとした。検定番号は表記揺れ・型式・メーカー・公安委員会・検定・7S等で再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コア: 機械割 **98.1 / 99.5 / 101.2 / 104.0 / 109.3 / 114.9%**、ART初当たり **1/492.8 / 457.4 / 438.1 / 369.7 / 317.5 / 237.9**、超絶景ボーナス **全設定1/32768**。
- ベース **約45G/50枚**、ART純増 **約2.0枚/G**、超絶景ボーナスは270枚超払い出し終了・実獲得目安約200枚、ART初期20G以上+特化ゾーン。
- 通常天井は **最大99盗目成立 → ART**。
- resetBehavior: 設定変更で盗目天井RESET/RESELECT、内部状態RESELECT（通常開始）、盗目ST初期化。純電源OFF→ONでは盗目天井・内部状態をCARRYOVERし、表示上の盗目回数等だけリセットされる項目がある。
- 設定変更後の盗目天井公開振り分けを保存。設定1〜3は99盗目選択なし、設定4以上のみ99盗目5.08%。設定変更後は66盗目以下が基本で通常最大99盗目から大幅短縮。
- ART終了画面のリセット確定パターン「五奉行（青）」について、設定変更後ART1〜2回目10%、3回目20%（それまで未出現条件）の公開数値を保存。
- **鬼賽の設定変更時挙動は資料CONFLICT**。ちょんぼりすたは再抽選、すろぱちくえすとはリセットでも個数引継ぎと記載。概念差の可能性を勝手に統合せず `CONFLICT_ONISAI_RESET_RESELECT_VS_CARRYOVER` として双方保持。
- 本機固有の確定ガックン契約は検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1140 — 盗忍！剛衛門
- manufacturer: **大都技研**
- releaseDate: **2017-09-19**
- formalModelName: **番長外伝 盗忍！剛衛門／A8**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / A+ART / ゲーム数上乗せ型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_AND_CONFLICT**

### resetBehavior v0.7 要点
- settingChange: **盗目天井RESET/RESELECT / 内部状態RESELECT（通常） / ST初期化 / 朝一温泉宿**。
- stay setting: **主要内部進行CARRYOVER**。
- pure power OFF→ON: **盗目天井・内部状態CARRYOVER**。表示上の盗目回数/STランプ等はリセットされ得るが内部値は引継ぎ。
- normal ceiling: **最大99盗目**。
- reset ceiling Setting1〜3: **7=1.56% / 33=0.39% / 66=98.05% / 99=0%**。
- reset ceiling Setting4〜5: **7=3.13% / 33=0.78% / 66=91.02% / 99=5.08%**。
- reset ceiling Setting6: **7=1.95% / 33=10.16% / 66=82.81% / 99=5.08%**。
- reset detection: **五奉行（青）終了画面でリセット確定。変更後ART1〜2回目10%、3回目20%（未出現条件）**。
- onisai reset: **CONFLICT_RESELECT_VS_CARRYOVER**。
- gakkun: **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137
4. ぱちスロ ウルトラセブン — No.1138
5. SLOT魁!!男塾〜目指せ！闘宴大武會〜 — No.1139
6. **盗忍！剛衛門 — No.1140**

優先未処理候補:
- **シンデレラブレイド3 — No.1141候補**。HAZUSEで **2017-09-19 / NET / 型式 `シンデレラ×ブレイド3／NI` / 検定番号 `7S0870`** を再確認済み。performance core + resetBehavior v0.7を次本線として処理する。
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に2017-09-19群CLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1140を再取得。
2. **1140件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「シンデレラブレイド3」— No.1141候補**。
4. 続いて全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査し、漏れがなければCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1140 盗忍！剛衛門
- グリーンべると（メーカー/番長外伝/ART純増/基本性能）: https://web-greenbelt.jp/00009887/
- P-WORLD（機種概要/最大99盗目天井/ART性能）: https://www.p-world.co.jp/machine/database/8497
- パチビー（導入日/メーカー/5号機ART）: https://www.pachibee.jp/machines/kouryaku/217080011
- 一撃 基本: https://1geki.jp/slot/s_gouemon/
- 一撃 天井・設定変更: https://1geki.jp/slot/s_gouemon/3/
- ちょんぼりすた（性能コア/天井/設定変更vs電源OFF→ON/精密リセット振り分け）: https://chonborista.com/slot/daito-slot/44323/
- すろかい 当時解析（導入日/型式略称/性能コア/精密リセット振り分け）: https://slotkaiseki.hatenablog.com/entry/gouemon
- すろぱちくえすと（リセット確定終了画面/鬼賽引継ぎ記述）: https://www.slopachi-quest.com/article/tossu-gouemon/
- 期待値見える化（リセット確定終了画面の公開確率）: https://slotjin.com/slot-tool/gouemon-settei/
- パチマガスロマガ（50枚あたり約45G）: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/73/c-2.php
- スロパチネット（正式型式表記/性能コア）: https://slopachi-net.com/gouemon

### 次候補先行確認
- HAZUSE シンデレラブレイド3: https://hazuse.com/machine/pachislot/7S0870/
