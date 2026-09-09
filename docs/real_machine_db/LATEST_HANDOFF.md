更新日: 2026-09-09

## 現在地点
- recordCount: **1136**
- latestRecordAdded: **パチスロ亜人**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_ajin.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ亜人 — No.1136**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1135「パチスロ ゴルゴ13（SANKYO 2017版）」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1135件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- **「パチスロ亜人」No.1136** を追加。並行リレーによる根拠強化コミットもmainへ入ったため、最新実レコードを正本とする。
- オリンピア公式製品ページが現存。HAZUSEは型式 **パチスロ亜人／A3**、検定番号 **7S0590**、導入開始日 **2017-09-19**。K-Navi・ちょんぼりすたも9/19一致。グリーンべると2017-08-10業界記事は9/18納品開始予定で整合。
- 一撃 / すろぱちくえすと / スロパチネットには **2017-09-04** 表記が残るため、平均せずCONFLICT保持。canonicalは2017-09-19。
- 性能コア: 機械割 **97.8 / 98.8 / 100.8 / 103.5 / 105.5 / 110.1%**、ART初当たり **1/358.1 → 1/230.2**、ボーナス全設定 **1/299.3**、ベース代表 **約30.1G/50枚**（30.1～31.1G表記差保持）、ART純増 **約1.3枚/G**（ボーナス込み約1.8枚/G）、亜人BONUS **150枚**、ART初期 **40G+α**。
- 通常天井はART間 **999G**、設定変更時は **600G** へ短縮。
- resetBehavior v0.7: 設定変更で **天井RESET / 内部状態RESELECT / ART中エピソードRESELECT / RT状態はボーナス後状態へ**。純電源OFF→ONでは **天井・内部状態・ART中エピソード・RT状態CARRYOVER**。
- 設定変更時内部状態: 設定1～3 **低確73.44 / 高確25.00 / 警戒1.56%**、設定4～6 **低確63.28 / 高確33.59 / 警戒3.13%**。
- resetDetection: 期待値見える化の直接比較で **ガックン判別不可**。市街地ステージ開始は公開挙動だが単独で確定変更判別扱いにしない。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1136 — パチスロ亜人
- manufacturer: **オリンピア**
- releaseDate: **2017-09-19**（9/4表記CONFLICT保持）
- formalModelName: **パチスロ亜人／A3**
- certificationNumber: **7S0590**
- generation/system: **5号機（5.5号機世代） / A+ART / G数上乗せ型**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **天井RESET→600G / 内部状態RESELECT / ART中エピソードRESELECT / RT状態ボーナス後状態へ**。
- stay setting: **天井・内部状態等CARRYOVER**。
- pure power OFF→ON: **天井・内部状態・ART中エピソード・RT状態CARRYOVER**。
- normal ceiling: **999G**。
- reset ceiling: **600G**。
- reset benefit: **399G短縮 + 設定4～6は高確/警戒スタート比率が高い**。
- reset detection: **ガックン判別不可**。

## 2017-09-04群 — CLOSED
登録済み No.1127〜No.1134。SLOTデビルマンχは9/4 vs 9/19の導入日CONFLICTを保持。

## 2017-09-19群 — OPEN
登録済み:
1. パチスロ ゴルゴ13（SANKYO 2017版）— No.1135
2. **パチスロ亜人 — No.1136**

優先未処理候補:
- **パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-** — 次本線。タイヨーエレック製 / サミー。
- ウルトラセブン
- 魁!!男塾
- 盗忍！剛衛門
- シンデレラブレイド3
- 同日・周辺日の全メーカー横断監査を継続し、漏れ確認後に群CLOSED判定する。

### 次候補「蒼き鋼のアルペジオ -アルス・ノヴァ-」先行確認
- 2017-09-19導入本線。
- A+ART、ART純増約 **1.8枚/G**、ボーナス150枚。
- 期待値見える化掲載値: 機械割 **97.6 / 99.2 / 100.7 / 103.1 / 106.0 / 110.2%**、ART初当たり **1/377.9 → 1/244.4**、ボーナス **1/993.0**、ベース **約38.2G/50枚**。
- 通常天井 **ART間1200G+前兆**。設定変更時は最大 **800G**へ短縮し、公開振り分け **100G 25% / 400G 25% / 800G 50%**。
- 設定変更時内部状態 **低確50 / 通常25 / 高確25%**、純電源OFF→ONは天井・内部状態CARRYOVERとの解析あり。
- 次回、型式/検定番号・設定変更/据え置き/電源OFF→ON・変更判別を表記揺れ込みで再監査してNo.1137化する。

## 遡及 resetBehavior QA
- 直前handoffは `2006-06_thunderbirds-neo-xx.md` を次カーソルとしていたが、最新main実レコードでは同機は既に **`PARTIAL_RESEARCH_EXHAUSTED`** までQA完了済み。重複処理を回避した。
- 実レコード追加順をGitHubコミット履歴で確認し、サンダーバードNEOXX直後の **`docs/real_machine_db/machines/2006-06_lord-of-the-rings.md`** を今回処理。
- 「ロード・オブ・ザ・リング」の性能側 `status: PARTIAL` は維持し、reset側のみ **`PARTIAL_RESEARCH_EXHAUSTED`** へ更新。
- ボーナス主体BIG+CB機で、通常ゲーム数天井・RT/ART/AT・朝一専用CZ/ゲーム数モードは **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。
- 設定変更/据え置き/純電断時の成立済みボーナス等の低レベル内部契約は機種固有の直接資料を固定できず、一般的5号機挙動から推測せず **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井、朝一優遇/不利、モード振り分け、公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。本機固有ガックン/表示判別は **UNVERIFIED_AFTER_RESEARCH**。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1136を再取得。
2. **1136件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN** を正本として継続。
3. 最優先は **「パチスロ蒼き鋼のアルペジオ -アルス・ノヴァ-」— No.1137候補**。
4. 次にウルトラセブン / 魁!!男塾 / 盗忍！剛衛門 / シンデレラブレイド3等を全メーカー・表記揺れ・地域導入差で横断監査。
5. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1136 パチスロ亜人
- オリンピア公式: https://www.olympia.co.jp/newmachine/ps_ajin/index.html
- グリーンべると / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/9518/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/7S0590/
- K-Navi: https://p-kn.com/slot/2870/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/44167/
- 期待値見える化: https://slotjin.com/zone/ajin/
- すろかい: https://slotkaiseki.hatenablog.com/entry/ajin
- スロパチネット: https://slopachi-net.com/ajin
- 一撃: https://1geki.jp/slot/s_ajin/
- すろぱちくえすと: https://www.slopachi-quest.com/article/ajin/

### retro QA ロード・オブ・ザ・リング
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/860/
- P-WORLD: https://www.p-world.co.jp/machine/database/4225
- K-Navi: https://p-kn.com/slot/721/
- pacnk: https://pacnk.com/slot/tools/sh_rodoobuzaringu.html
- 既存HAZUSE / パチマガスロマガ旧ページも継続参照。
