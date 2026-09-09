更新日: 2026-09-09

## 現在地点
- recordCount: **1137**
- latestRecordAdded: **パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-**（タイヨーエレック製造 / サミー発売）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_aoki-hagane-no-arpeggio-ars-nova.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1136「パチスロ亜人」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1136件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- **「パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-」No.1137** を追加。
- サミー公式2017-07-18発売告知で **製造元タイヨーエレック / 9月上旬稼働予定**。PiDEA Xは9/18納品予定、パチ＆スロ必勝本・期待値見える化・クランキーセブンは **2017-09-19導入**で一致。canonicalは2017-09-19。
- 型式名・検定番号は表記揺れ、タイヨーエレック/サミー、型式/検定/7S系、2018年Mental Model ver.混同回避まで再探索したが初代の直接値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 性能コア: 機械割 **97.6 / 99.2 / 100.7 / 103.1 / 106.0 / 110.2%**、ART初当たり **1/377.9 → 1/244.4**、ボーナス **1/993.0**、ベース **約38.2G/50枚**、ART純増 **約1.8枚/G**、BIG/トライデントBONUS **各150枚**。
- 通常天井 **ART間1200G+最大16G前兆**。ボーナスではART間天井をリセットしない。
- resetBehavior v0.7: 設定変更で **天井RESET/再抽選・内部状態RESELECT**。設定変更専用天井 **100G 25% / 400G 25% / 800G 50%**。内部状態 **低確50 / 通常25 / 高確25%**。
- 純電源OFF→ONは **天井・内部状態CARRYOVER**。据え置きも同系統の引継ぎ扱い。
- resetDetection: 期待値見える化は **ガックン判別有効**とするが「サミー筐体でホールが対策していなければ」という条件付きのため、確定判別ではなく **POSSIBLE_GAKKUN_INDICATOR_NOT_DETERMINISTIC / COUNTERMEASURE_DEPENDENT** とした。
- 設定変更/純電断後の朝一ステージは当時解析も調査中で、今回の再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1137 — パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-
- manufacturer: **タイヨーエレック製造 / サミー発売**
- releaseDate: **2017-09-19**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機（5.5号機世代） / A+ART / 自力バトル型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL**

### resetBehavior v0.7 要点
- settingChange: **天井RESET / 100G 25%・400G 25%・800G 50% / 内部状態RESELECT**。
- stay setting: **天井・内部状態CARRYOVER**。
- pure power OFF→ON: **天井・内部状態CARRYOVER**。
- normal ceiling: **ART間1200G+最大16G前兆**。
- reset maximum ceiling: **800G**。
- reset state: **低確50% / 通常25% / 高確25%**。
- reset benefit: **100G以内25% / 400G以内50% / 最大800G天井 + 高確25%スタート**。
- reset detection: **ガックン有効情報あり。ただし対策依存で確定判別不可**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. パチスロ亜人 — No.1136
3. **パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ- — No.1137**

優先未処理候補:
- **ぱちスロ ウルトラセブン** — 次本線。K-Navi / 一撃 / ちょんぼりすたで2017-09-19導入を先行確認。
- 魁!!男塾〜目指せ！闘宴大武會〜 — 2017-09-19導入先行確認。
- 盗忍！剛衛門 — 2017-09-19導入先行確認。
- シンデレラブレイド3 — HAZUSE / パチビーで2017-09-19、型式 `シンデレラ×ブレイド3／NI`、検定番号 `7S0870` を先行確認。
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に群CLOSED判定する。

### 次候補「ぱちスロ ウルトラセブン」先行確認
- 2017-09-19導入本線。オッケー./京楽系列。
- ART機、純増約 **2.0枚/G**、ベース約 **48G/50枚**、通常天井 **1280G**。
- 一撃掲載値: 機械割 **97.5 / 98.9 / 100.3 / 104.2 / 107.9 / 112.6%**、ART初当たり **1/548.3 → 1/375.1**。
- K-NaviにはART初当たり別値（例: 設定1 1/548.1等）があるため、次回は丸め差/解析差を精査しCONFLICT要否を判断する。
- 次回、型式/検定番号、設定変更/据え置き/純電源OFF→ON、天井短縮、モード/状態、朝一数値、ガックンを表記揺れ込みで再探索してNo.1138化する。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1137を再取得。
2. **1137件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「ぱちスロ ウルトラセブン」— No.1138候補**。
4. 次に 魁!!男塾〜目指せ！闘宴大武會〜 / 盗忍！剛衛門 / シンデレラブレイド3 等を全メーカー・表記揺れ・地域導入差で横断監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1137 パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-
- サミー公式発売告知: https://www.sammy.co.jp/japanese/news/2017/732.html
- サミー公式2017年製品一覧: https://www.sammy.co.jp/japanese/products/pachislot/2017/index.html
- PiDEA X: https://www.pidea.jp/articles/%E3%80%8C%E8%92%BC%E3%81%8D%E9%8B%BC%E3%81%AE%E3%82%A2%E3%83%AB%E3%83%9A%E3%82%B8%E3%82%AA%E3%80%8D%E5%A4%A7%E8%BF%AB%E5%8A%9B%E3%81%AE%E8%89%A6%E9%9A%8A%E3%83%90%E3%83%88%E3%83%ABART%EF%BC%8F%E3%82%B5%E3%83%9F%E3%83%BC
- グリーンべると: https://web-greenbelt.jp/00009796/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/3040/1/66051
- P-WORLD: https://www.p-world.co.jp/machine/database/8471
- 期待値見える化: https://slotjin.com/zone/aokihagane/
- ちょんぼりすた: https://chonborista.com/slot/sammy-slot/45380/
- クランキーセブン: https://crankyseven.com/arpeggio-pc.htm

### 次候補先行確認
- K-Navi ウルトラセブン: https://p-kn.com/slot/2876/
- 一撃 ウルトラセブン: https://1geki.jp/slot/s_ultraseven/
- ちょんぼりすた ウルトラセブン: https://chonborista.com/slot/kyoraku-slot/44095/
- パチビー 盗忍！剛衛門: https://www.pachibee.jp/machines/kouryaku/217080011
- HAZUSE シンデレラブレイド3: https://hazuse.com/machine/pachislot/7S0870/
