更新日: 2026-09-10

## 現在地点
- recordCount: **1147**
- latestRecordAdded: **パチスロ イースⅠ&Ⅱ**（ロデオ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_ys-i-ii.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ イースⅠ&Ⅱ — No.1147**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1146「パチスロ 地獄少女 宵伽」を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1146件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「パチスロ イースⅠ&Ⅱ」** を重複検索し、performance core + resetBehavior v0.7を収集して **No.1147** としてmainへ保存。

## No.1147 — パチスロ イースⅠ&Ⅱ
- manufacturer: **ロデオ**
- releaseDate canonical in current 9/19 audit: **2017-09-19**
- releaseDate conflict: **2017-09-04 vs 2017-09-19**。HAZUSE/ちょんぼりすた/スロパチネットは9/4、パチビー/すろぱちくえすとは9/19。平均せずCONFLICT保持。
- formalModelName: **パチスロイースI＆II／XX**
- certificationNumber: **7S0679**
- generation/system: **5号機（5.5号機世代） / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### 性能コア
- 機械割: **97.6 / 98.7 / 100.1 / 104.6 / 106.8 / 110.1%**。
- BIG: **1/595.8 / 1/585.1 / 1/574.9 / 1/565.0 / 1/555.4 / 1/546.1**。
- ART初当たり: **1/449.9 / 1/440.7 / 1/425.0 / 1/374.5 / 1/366.3 / 1/362.1**。
- ベース: **約33.7G/50枚**（約34G表記は丸め差）。
- BIG: **約200枚**。
- ART「イースRUSH」: **1セット50G+α / 純増約1.7枚/G、ボーナス込み約2.0枚/G**。
- 通常天井: **ART間1280G+α → ART**。ボーナスでは天井をクリアしない。

### resetBehavior v0.7
- settingChange: **ART間天井RESET / 最大800G+αへ短縮 / 内部状態を設定別再抽選**。
- stay setting: **UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH**。
- pure power OFF→ON: **UNVERIFIED_AFTER_RESEARCH**。当時朝一比較表でも天井・内部状態・ステージは調査中で、検索語/型式/資料系統を変えた再探索後も直接契約を固定できず推測しない。
- modeAfterReset: 通常/天国等の朝一ゲーム数モードは **NONE_CONFIRMED_AFTER_RESEARCH**。
- advantageousSection: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- reset state distribution（通常/高確/超高確）:
  - s1: **58.79 / 28.71 / 12.50%**
  - s2: **58.79 / 28.71 / 12.50%**
  - s3: **58.79 / 28.71 / 12.50%**
  - s4: **42.58 / 44.92 / 12.50%**
  - s5: **33.79 / 41.21 / 25.00%**
  - s6: **0.14 / 50.06 / 49.80%**
- 設定6は設定変更後 **99.86%で高確以上**。朝一の草原ステージは高確示唆だが初期画面固定ではなく、数G観察が必要。
- ガックンは同筐体「闘え！サラリーマン」から本機も有効の可能性大とする当時解析のみ。実測確定契約ではないため **POSSIBLE_NOT_DETERMINISTIC**。確定発生率/初期出目/ランプは **UNVERIFIED_AFTER_RESEARCH**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχ等の導入日CONFLICTは個別レコード保持。

## 2017-09-19群 — OPEN
登録済み No.1135〜No.1147。今回 **イースⅠ&Ⅱ No.1147** を追加。

### 同日横断監査・未処理候補
- **紅き魂は桜の如く — No.1148候補**。2017-09-19候補。次本線として導入日・型式・重複確認後、performance core + resetBehavior v0.7を収集する。
- **乱嵐エイサー ver.100** — 2017-09-19候補、未登録。
- `闘え!サラリーマン` — 一部当時一覧で2017-09-19表記があるため、同日群CLOSED前に導入日・型式・独立発売有無を再監査する。
- 上記処理後も全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査し、漏れがなければCLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1147を再取得。
2. **1147件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「紅き魂は桜の如く」— No.1148候補**。
4. 続いて **乱嵐エイサー ver.100** を重複・導入日確認しながら処理。
5. `闘え!サラリーマン` の9/19導入可否を再監査し、2017-09-19同日全メーカー監査を継続。追加漏れがなければCLOSED判定して次導入日群へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1147 パチスロ イースⅠ&Ⅱ
- HAZUSE: https://hazuse.com/machine/pachislot/7S0679/
- パチビー: https://www.pachibee.jp/machines/index/217080012
- P-WORLD: https://www.p-world.co.jp/machine/database/8476
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/45479/
- すろぱちくえすと: https://www.slopachi-quest.com/article/ys1-2/
- スロパチネット: https://slopachi-net.com/ys
- PiDEA X: https://www.pidea.jp/articles/%E3%83%9C%E3%82%B9%E3%82%92%E5%80%92%E3%81%97%E3%81%A6%E4%B8%8A%E4%B9%97%E3%81%9B%E3%82%92%E8%B2%B7%E3%81%86%EF%BC%81%EF%BC%9F%E4%BA%BA%E6%B0%97RPG%E3%80%8C%E3%82%A4%E3%83%BC%E3%82%B9%E3%80%8D%EF%BC%8F%E3%83%AD%E3%83%87%E3%82%AA
- ロデオ検定通過機種整理: https://q-and-a.hatenablog.com/entry/2016/10/04/112726
