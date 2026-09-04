# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **622**
- latestMachineAdded: **パチスロ「黒ひげ危機一発」**（山佐）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_kurohige-kiki-ippatsu.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **パチスロ「黒ひげ危機一発」**
- schema: **resetBehavior v0.7**
- status: **FINAL_AUDIT_2011-11-21_SAME_DAY_GROUP**

## 今回の本線追加 — パチスロ「黒ひげ危機一発」

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「ミラクルジャグラー」を再取得して開始。
- 開始時正本は **recordCount 621 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- LATEST_HANDOFFの先行候補「ストリートファイターIV」はrepo code searchで未検出だったが、想定実パスを直接fetchすると **既に2011-11-07レコードとして存在**。K-Navi/パチビー11/7、グリーンべると11/6納品、HAZUSE11/21という日付競合まで既処理だったため重複追加を回避。
- 11/21同日群を再監査し、山佐「パチスロ『黒ひげ危機一発』」を未登録として発見。repo code search未検出、想定実パス404を確認して622件目として追加。
- 山佐公式は2011年11月稼働、グリーンべるとは2011-11-20納品開始予定、K-Naviは2011-11-21ホール導入開始。定義整合のためreleaseDateは **2011-11-21**。

### 性能コア

- 5号機 / ボーナス非搭載 / ART専用 / 周期・モード管理。
- メーカー: **山佐**。
- 機械割: **96.2 / 98.1 / 100.0 / 102.0 / 104.0 / 107.6%**。
- ART初当たり: **1/75.5 / 1/72.3 / 1/69.2 / 1/65.8 / 1/62.5 / 1/58.4**。
- ART「黒ひげアドベンチャー」: **約+2.0枚/G**。
- 基本ART: **30G**、30G消化時純増目安約**60枚**。黒ひげチャレンジで最大**1000G**まで選択可能。
- SUPER黒ひげアドベンチャー: **250G確定**。
- 50枚ベースは表記揺れ/50枚/1000円/1k/コイン持ち等で横断再探索したが直接値を安全に確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**。

### resetBehavior v0.7

- K-Naviに本機専用 **「設定変更後の挙動」「モード移行率(設定変更後)」**解析項目が存在。
- 別系統後年解析で、**設定変更後は規定ゲーム数が128G以下に再セット**されることを直接回収。
- 通常時は内部モード別周期管理。グリーンべるとはモードにより周期の“天井”が異なると説明。パチマガスロマガ旧解析では通常ステージの周期範囲1～255G、夜24G以内、嵐24G以内+天国濃厚を確認。
- したがって設定変更後の最大128Gは、単一ゲーム数天井の短縮ではなく **次回周期到達までの朝一短縮**として保存。ART当選128G以内保証とは解釈しない。
- `gameCounterReset`: 前日周期進捗をそのまま継続せず、新規128G以下規定Gへ再セットされる挙動を確認。
- `modeAfterReset`: 設定変更後モード移行解析の存在は確認したが具体振り分け値は今回回収できず **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き時の周期/モード保持、純電源OFF→ON、ガックン/初期出目/液晶等の変更判別は機種名/型式/メーカー/朝一/据え置き/電断/周期/モード/ガックン等で再探索後も直接確定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_BEHAVIOR_WITH_DIRECT_RESET_128G_RULE**。

### CONFLICT / 定義差

1. P-WORLD/グリーンべるとの「天井」は内部モード別周期上限の意味。後年解析の「ゲーム数天井非搭載」とは単一救済天井の有無という定義差であり、**DEFINITION_DIFFERENCE_CYCLE_CEILING_VS_SINGLE_GAME_CEILING**として分離。
2. 一部後年5号機まとめに2012年11月・AT純増2.8枚/G等、本機公式2011年11月・ART約2.0枚/Gと明確に矛盾する機種混同を確認。当該ページは出典不採用。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 622 / chronologicalFrontier 2011-11-21**から開始。
2. **2011-11-21同日群の最終監査**を行う。HAZUSE新台カレンダーに2011-11-21日付枠が存在することを再確認済み。
3. 既知11/21候補の **巨人の星V / 赤ドン雅 / ミラクルジャグラー / 黒ひげ危機一発** はrepo実レコードを直接突合し、他の11/21未登録機がないかK-Navi・HAZUSE・メーカー別一覧・当時業界記事で閉鎖判定する。
4. ストリートファイターIVは **2011-11-07の既存レコード**として扱い、HAZUSEの11/21はそのレコード内CONFLICT。再追加しない。
5. 同日群を閉じられたら、次の導入日へ時系列で進む。2011年12月へ飛ぶ前に11/22～11/30の具体日/納品日を監査する。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/周期/モード/状態/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### パチスロ「黒ひげ危機一発」
- 山佐ネクスト公式: `https://yamasa-next.co.jp/model_khg/`
- グリーンべると（2011-11-07）: `https://web-greenbelt.jp/00002423/`
- K-Navi: `https://p-kn.com/slot/1528/`
- パチマガスロマガ旧解析 スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/183/a.php`
- パチマガスロマガ旧解析 ART初当たり/PAYOUT: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/183/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6535`
- pacnk: `https://pacnk.com/slot/tools/sh_kurohigekikiippastu.html`

### 同日群順序確認
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 次回順序確認
- **2011-11-21同日群を最終監査。漏れがなければ11/22～11/30境界を確認して次の具体導入日へ進む。**
