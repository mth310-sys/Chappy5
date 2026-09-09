更新日: 2026-09-09

## 現在地点
- recordCount: **1139**
- latestRecordAdded: **SLOT魁!!男塾〜目指せ！闘宴大武會〜**（ミズホ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_slot-sakigake-otokojuku.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **SLOT魁!!男塾〜目指せ！闘宴大武會〜 — No.1139**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1138「ぱちスロ ウルトラセブン」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1138件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先候補 **「SLOT魁!!男塾〜目指せ！闘宴大武會〜」** を重複確認後、performance core + resetBehavior v0.7を収集し **No.1139** としてmainへ保存。
- HAZUSE / P-WORLD / ちょんぼりすた / 当時すろかいでミズホ製・2017-09-19導入を照合。
- 正式型式は **`SLOT魁!!男塾BM`**。鹿児島県公安委員会2017-07-11公告から製造者 **株式会社ミズホ**、検定番号 **7S0681** を直接確認。
- 性能コア: 機械割 **98.3 / 99.4 / 101.5 / 104.0 / 110.5 / 119.1%**。BIG **1/1057.0 → 1/910.2**、ART初当たり **1/347.8 → 1/195.6**、CZ **1/157.8 → 1/111.9**。
- ベース **約39.7G/50枚**、ART純増 **ボーナス込み約1.8枚/G**。BIG平均約200枚、大威震八連制覇1試合平均約30G、闘宴大武會1試合平均約25G。
- 通常天井は **BIG+ART間1000G+前兆 → ART**。
- resetBehavior v0.7: 設定変更で **天井RESET / 内部状態RESELECT / 初回CZ周期SPECIAL**。純電源OFF→ONでは **天井・内部状態CARRYOVER**。据え置きも主要契約はcarryover扱い。
- 設定変更時初回のみ **特殊周期**へ移行し、CZ/ART期待度 **約37%**、消化後は周期A確定。
- 公開朝一数値として初期CBポイント **0pt 46.8 / 1pt 25.0 / 2pt 12.5 / 3pt 9.4 / 4pt 6.3%** を保存。
- 初回周期で複数CBポイントを確認できる場合は設定変更濃厚とする解析があり、変更判別補助として保存。ただしガックン・ステージの確定契約は再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部状態初期振り分け、純電源OFF→ON時のCBポイント/周期直接契約は、検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1139 — SLOT魁!!男塾〜目指せ！闘宴大武會〜
- manufacturer: **ミズホ（ユニバーサルエンターテインメント系列）**
- releaseDate: **2017-09-19**
- formalModelName: **SLOT魁!!男塾BM**
- certificationNumber: **7S0681**
- generation/system: **5号機（5.5号機世代） / A+ART / CZ搭載 / 自力継続型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / 内部状態RESELECT / 初回SPECIAL周期 / 初期CBポイント再抽選**。
- stay setting: **天井・内部状態CARRYOVER**。周期/CBポイントは純電断直接契約不足のため詳細UNVERIFIED。
- pure power OFF→ON: **天井・内部状態CARRYOVER**。CBポイント/周期は **UNVERIFIED_AFTER_RESEARCH**。
- normal ceiling: **BIG+ART間1000G+前兆**。
- reset ceiling shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
- reset special cycle: **CZ/ART期待度約37% / 次回周期A**。
- reset initial CB points: **0pt 46.8 / 1pt 25.0 / 2pt 12.5 / 3pt 9.4 / 4pt 6.3%**。
- reset detection: **初回CBポイント挙動は変更推測材料 / 確定ガックン・ステージ契約はUNVERIFIED**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137
4. ぱちスロ ウルトラセブン — No.1138
5. **SLOT魁!!男塾〜目指せ！闘宴大武會〜 — No.1139**

優先未処理候補:
- **盗忍！剛衛門** — 次本線。2017-09-19導入、大都技研。盗目回数天井、設定変更時の盗目カウンタ/モード/天井、朝一終了画面・変更判別をv0.7粒度で精査する。
- **シンデレラブレイド3** — HAZUSEで2017-09-19、型式 `シンデレラ×ブレイド3／NI`、検定番号 `7S0870` を先行確認済み。
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に群CLOSED判定する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1139を再取得。
2. **1139件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「盗忍！剛衛門」— No.1140候補**。
4. 次に **シンデレラブレイド3** を優先し、全メーカー・表記揺れ・地域導入差で2017-09-19群を横断監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1139 SLOT魁!!男塾〜目指せ！闘宴大武會〜
- 鹿児島県公安委員会 公告（型式/製造者/検定番号）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60424_20170710165230-1.pdf
- HAZUSE DATA: https://data.hazuse.com/?genre=209&machine_code=7S0681
- P-WORLD: https://www.p-world.co.jp/machine/database/8500
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/45177/
- すろかい 当時解析: https://slotkaiseki.hatenablog.com/entry/otokojyuku
- スロ安サーチ 中古実機DB: https://slot-price.com/slot_price_details/id/1164

### 次候補先行確認
- ちょんぼりすた 盗忍！剛衛門: https://chonborista.com/slot/daito-slot/44323/
- HAZUSE シンデレラブレイド3: https://hazuse.com/machine/pachislot/7S0870/
