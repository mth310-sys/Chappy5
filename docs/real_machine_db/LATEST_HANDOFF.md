# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **770**
- latestMachineAddedByChronology: **クイーンハナハナ-30**（パイオニア）
- latestRecord: `docs/real_machine_db/machines/2013-10-07_queen-hanahana-30.md`
- chronologicalFrontier: **2013-10-07**
- frontierLatestExactDateMachine: **クイーンハナハナ-30**
- schema: **resetBehavior v0.7**
- status: **CLOSED_2013-10-07_GROUP__NEXT_BOUNDARY_AUDIT_2013-10-08_TO_2013-10-20__KNOWN_2013-10-21_ANCHORS_MOUKO_HANAGATA_AND_LOVEJO**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-10-07_bakemonogatari.md` を再読してから継続。
- INDEXは旧集約状態（19件表記）のためREADME規定どおり **LATEST_HANDOFF + 実レコード** を正とする。
- 作業開始時の正本は **recordCount 769 / chronologicalFrontier 2013-10-07 / 10-07群OPEN**。
- 前handoff最優先候補 **「クイーンハナハナ-30」** の既存レコード不在をmainで確認し、770件目として新規登録。

## 今回追加 — クイーンハナハナ-30

### identity / 性能コア

- manufacturer: **パイオニア / PIONEER**。
- modelName: **クイーンハナハナEX-30**。
- releaseDate: **2013-10-07**。パチビー / K-Naviで一致。グリーンべると当時記事は納品開始2013-10-06であり定義を分離。
- generation/system: **5号機 / ノーマルAタイプ / 完全告知 / 30φ**。
- 機械割: **96 / 98 / 101 / 104 / 107 / 111%**。
- BIG: **1/309 / 297 / 284 / 270 / 256 / 240**。
- REG: **1/516 / 481 / 445 / 409 / 376 / 344**。
- 合算: **1/193 / 184 / 173 / 163 / 152 / 141**。
- baseGamesPer50: **平均約37.5G**。
- BIG **最大約312枚** / REG **最大約130枚**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 純AタイプでART/AT/CZ、ゲーム数天井、朝一モード・高確状態、有利区間は **NOT_APPLICABLE**。
- 設定変更専用の短縮天井・CZ/AT優遇・朝一専用モードは **NONE / NOT_APPLICABLE_NORMAL_TYPE**。
- 電源OFF→ONのみでホール朝一価値を持つ天井進捗・AT/ART状態は **NOT_APPLICABLE_NORMAL_TYPE**。
- 変更判別は後年解析で **ガックンすれば設定変更濃厚**。ただし停止出目・個体差・店側対策があるため確定判別にしない。
- **朝一87G以内のボーナスでBGM変化が発生すれば据え置き濃厚** とする解析あり。発生率は低いので観測系として保持。
- クイーンハナハナ以降はベットランプ判別不可とする解析あり。
- publicMorningNumbers: **87G以内**のみ観測系の据え置き示唆ウィンドウとして保存。

## 2013-10-07同日群 — CLOSED

処理済み:
- **Persona4 The SLOT**（ニューギン） — record 768。
- **パチスロ 化物語**（Sammy） — record 769。
- **クイーンハナハナ-30**（パイオニア） — record 770。

HAZUSE / K-Navi / パチビー / P-WORLD業界記事系を再横断し、今回追加すべき別の2013-10-07確定スロット候補は確認できなかったため同日群をCLOSED。

## 次境界

- **2013-10-08〜2013-10-20** を導入日・納品日・検定日を分離して監査する。
- 次の既知具体日アンカーは **2013-10-21**。
- HAZUSEで同日導入を確認済み:
  - **猛虎花形**（スパイキー） — 型式 猛虎花形CC / 3S0448。
  - **パチスロ ラブ嬢**（オリンピア） — 型式 パチスロラブ嬢A1 / 3S0656。
- 境界監査で10/08〜10/20の未処理が見つかった場合はそちらを優先し、10/21へ飛ばさない。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回もGitHubの巨大tree応答では直後ファイル名を安全に一意抽出できなかったため、誤ったQA前進を避けてカーソルを据え置いた。
- `karate-baka-ichidai` 自体は既にresetBehavior v0.7収集済み。既存COMPLETE_CORE/PARTIAL等の性能側判定は変更しない。

## 次回再開地点

1. **recordCount 770 / chronologicalFrontier 2013-10-07 / 10-07群CLOSED** から開始。
2. **2013-10-08〜10-20境界監査**を先に実施。
3. 漏れがなければ2013-10-21群へ進み、最古の未登録候補から性能コア + resetBehavior v0.7を収集。
4. 既知候補は **猛虎花形 / パチスロ ラブ嬢**。同日群の他メーカー候補も横断監査する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順から再開し、resetBehavior欠損の最初の1機を特定する。

## 主要出典 — 取得日 2026-09-06

### クイーンハナハナ-30

- パチビー: `https://www.pachibee.jp/machines/about/213080011` — 2013-10-07導入 / 5号機ノーマル / 完全告知 / 30φ。
- K-Navi: `https://p-kn.com/slot/1926/` — 2013-10-07導入 / 設定別BIG・REG・合算 / 機械割 / BIG312枚・REG130枚。
- P-WORLD / グリーンべると 2013-08-30: `https://news.p-world.co.jp/articles/6038/greenbelt` — 型式 / 平均37.5G/1000円 / 出玉率 / ボーナス枚数 / 納品10-06。
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/107/a.php` — ノーマル完全告知 / BIG約312枚・REG約130枚。
- スロパチクエスト: `https://www.slopachi-quest.com/article/queen-hanahana/` — ガックン / 朝一87G以内BGM据え置き示唆 / ベットランプ判別不可。

### 次境界アンカー

- HAZUSE 猛虎花形: `https://hazuse.com/machine/pachislot/3S0448/` — 2013-10-21。
- HAZUSE パチスロ ラブ嬢: `https://hazuse.com/machine/pachislot/3S0656/` — 2013-10-21。

## commits

- 770th record add: `0e063c0aafc74f9013e7102997c1070d4552c4ea` (`db: add Queen Hanahana-30 with resetBehavior v0.7`)
- handoff update: current run (`db: advance relay through Queen Hanahana-30`)
