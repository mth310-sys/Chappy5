# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **623**
- latestMachineAdded: **クイーンジャック**（岡崎産業）
- latestRecord: `docs/real_machine_db/machines/2011-11-21_queen-jack.md`
- chronologicalFrontier: **2011-11-21**
- frontierLatestExactDateMachine: **クイーンジャック**
- schema: **resetBehavior v0.7**
- status: **FINAL_AUDIT_2011-11-21_SAME_DAY_GROUP_CONTINUE_WITH_30PHI_VARIANT_CHECK**

## 今回の本線追加 — クイーンジャック

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード「パチスロ『黒ひげ危機一発』」を再取得して開始。
- 開始時正本は **recordCount 622 / chronologicalFrontier 2011-11-21**。INDEXは旧19件地点のためREADME規定どおりINDEXより新しいLATEST_HANDOFFを進捗正本として使用。
- HAZUSEの2011年11月カレンダーを再確認し、11月21日が同月最後の導入日枠、次枠が2011-12-02であることを確認。
- 11/21同日群を個別機種ページ単位で再監査し、岡崎産業「クイーンジャック」を未登録として発見。repo code search未検出を確認し623件目として追加。
- HAZUSEは導入開始日2011-11-21、グリーンべるとは2011-11-20納品開始予定。定義整合のためreleaseDateは **2011-11-21**。
- 型式名 **クイーンジャック**、検定番号 **1S0214** をHAZUSEで直接確認。

### 性能コア

- 5号機 / ノーマル / Aタイプ / BIG+REG。
- メーカー: **岡崎産業**。
- 機械割: **97.8 / 99.3 / 101.2 / 103.7 / 106.2 / 109.0%**。
- BIG: **1/282.5 / 1/277.7 / 1/273.1 / 1/268.6 / 1/260.1 / 1/254.0**。
- REG: **1/431.2 / 1/397.2 / 1/360.1 / 1/309.1 / 1/284.9 / 1/254.0**。
- 合算: **1/170.7 / 1/163.4 / 1/155.3 / 1/143.7 / 1/136.0 / 1/127.0**。
- BIG最大約**321枚**、REG約**104枚**。
- HAZUSE、pacnk、後年解析ガイドで確率系列をクロスチェック。獲得枚数はグリーンべると、P-WORLD、旧パチマガスロマガで照合。
- 50枚ベースは「50枚 / 1000円 / 1k / コイン持ち / ベース / 回転数」等で資料系統を変えて再探索したが直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **PARTIAL_CORE_BASE_UNVERIFIED**。

### resetBehavior v0.7

- パチマガスロマガ旧解析で **天井なし**を直接確認。P-WORLDでもボーナスのみで出玉を増やす完全ノーマルタイプと確認。
- ゲーム数天井・周期・ART/AT/CZ・朝一専用モード・規定G数当選は確認されないため、`gameCounterReset` / `ceilingAfterReset` は **NOT_APPLICABLE**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- 設定変更時の天井短縮・朝一CZ/ART・専用モード優遇等は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一方、設定変更/据え置き/単純電源OFF→ONでのリール位置・7セグ・一時告知状態、ガックン/初期出目等の変更判別は「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 7セグ」を組み替え、HAZUSE、P-WORLD、旧解析、業界記事、後年DBを再探索しても本機固有の直接根拠を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- resetQaStatus: **RESET_BEHAVIOR_APPLICABILITY_CONFIRMED_WITH_MACHINE_SPECIFIC_DETAILS_UNVERIFIED**。

### CONFLICT

- 性能コア主要値に実質競合なし。丸め差の範囲で複数資料が一致。
- 小役確率から50枚ベースを逆算することは行っていない。

## 遡及resetBehavior QA 次回再開地点

1. 既存の遡及QA到達地点 **ドカベンDまで補完済み**を維持。
2. 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 本線の次回再開地点

1. **recordCount 623 / chronologicalFrontier 2011-11-21**から開始。
2. 同時期に存在する30Φ派生 **「クイーンジャック-30」** を最優先で確認。P-WORLD業界ニュース関連記事導線、後年一覧、実機関連資料で存在自体は確認済みだが、25Φ版と性能同一とは推測しない。
3. 「クイーンジャック-30」の型式名・検定番号・具体導入日・設定別性能をメーカー/HAZUSE/当時解析/古いDBで直接確認し、独立機種として十分な根拠が取れれば624件目として追加。資料不足なら再探索後UNVERIFIEDを明示してレコード化判断。
4. その後 **2011-11-21同日群を最終閉鎖**。既知の巨人の星V / 赤ドン雅 / ミラクルジャグラー / 黒ひげ危機一発 / クイーンジャック / ストリートファイターIV（既存11/07レコード内にHAZUSE11/21 CONFLICT保持）と突合し、他の11/21未登録機がないかHAZUSE・K-Navi・メーカー別一覧・当時業界記事で確認。
5. HAZUSEカレンダーでは11月21日が2011年11月最後の導入枠。11/21群を閉じたら、11/22～11/30は具体導入日/納品日を業界記事・メーカー資料で漏れ監査し、漏れがなければ **2011-12-02**へ進む。
6. PARTIAL/UNVERIFIEDは機種名/型式/メーカー/シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/周期/モード/状態/ガックン/有利区間を組み替えて再探索。
7. 競合値は平均せずCONFLICT。一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-05

### クイーンジャック
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0214/`
- グリーンべると（2011-11-02）: `https://web-greenbelt.jp/00002426/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6543`
- パチマガスロマガ旧解析 スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/64/a.php`
- パチマガスロマガ旧解析 ボーナス中: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/64/e.php`
- pacnk: `https://pacnk.com/slot/tools/sh_queenjack.html`
- パチスロ解析ガイド: `https://pachislot-guide.net/2011/queen-jack/`

### 時系列監査
- HAZUSE新台カレンダー: `https://hazuse.com/new-machine-calendar/newmachine-calendar/`

### 次回候補の存在確認
- P-WORLD業界ニュース（記事下関連記事にクイーンジャック-30）: `https://news.p-world.co.jp/articles/4976/greenbelt`
- 後年一覧（存在・2011年機の補助確認）: `https://pachisuro100.com/normal/`

### 次回順序確認
- **クイーンジャック-30の独立レコード可否を先に確定 → 11/21同日群最終閉鎖 → 11/22～11/30漏れ監査 → 問題なければ2011-12-02へ進む。**
