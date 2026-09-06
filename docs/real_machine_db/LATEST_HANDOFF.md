# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **855**
- latestRecordAdded: **トリプルクラウンZERO-ONE**（清龍ゲームジャパン）— 2014-11-17
- latestRecord: `docs/real_machine_db/machines/2014-11-17_triple-crown-zero-one.md`
- chronologicalFrontier: **2014-11-17**
- frontierLatestMachine: **トリプルクラウンZERO-ONE**
- schema: **resetBehavior v0.7**
- status: **2014-11-17_GROUP_OPEN_FINAL_AUDIT_REQUIRED**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、No.854 `2014-11-17_pachislot-higurashi-no-naku-koro-ni-kira.md` を再読。
- INDEXは旧集約状態（19件）のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **854件 / frontier 2014-11-17 / 11-17_GROUP_OPEN**。
- handoff指定の次未処理 **トリプルクラウンZERO-ONE** をNo.855として登録。
- HAZUSE / K-Navi / 旧パチマガスロマガ / P-WORLDを中心に性能コアとresetBehavior v0.7を再探索。
- 11/17同日群について複数検索語・当時一覧系を追加監査したが、今回の検索だけで群全体CLOSEDを断定せず、次回最終横断監査を残す。

## No.855 — トリプルクラウンZERO-ONE

- record: `docs/real_machine_db/machines/2014-11-17_triple-crown-zero-one.md`
- manufacturer: **清龍ゲームジャパン**。
- releaseDate: **2014-11-17**。HAZUSE / K-Navi一致。
- modelName: **トリプルクラウンZERO1-30**。
- inspectionNumber: **4S0620**。
- 旧パチマガスロマガ機種トップは **2014年12月** 表記のため `CONFLICT_RELEASE_MONTH_2014_11_17_VS_2014_12_LABEL` を保持。時系列キーは具体日2資料一致の11/17。

### 性能コア

- 機械割: **96.47 / 98.72 / 100.99 / 103.22 / 105.47 / 107.72%**。
- BIG: **1/327.68 / 312.08 / 297.89 / 284.94 / 273.07 / 262.14**。
- REG: **1/546.13 / 504.12 / 468.11 / 436.91 / 409.60 / 385.51**。
- 合算: **1/204.80 / 192.75 / 182.04 / 172.46 / 163.84 / 156.04**。
- BIG純増: **約312枚**。345枚超払い出しで終了。
- REG純増: **約104枚**。105枚超払い出しで終了。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。50枚/1000円/千円/ベース/コイン持ち等と表記揺れ・型式名を組み替え、当時攻略・旧DB・後年回顧まで横断したが本機固有の安全値を固定できず。
- ノーマル / 完全告知 / 沖スロ30Φ。AT/ART非搭載。
- **天井機能非搭載**。

### resetBehavior v0.7

- 天井・規定G解除モード・CZ・AT/ARTを持たないため、`gameCounterReset = NOT_APPLICABLE_NO_CEILING_OR_GAME_NUMBER_MODE`、`ceilingAfterReset = NOT_APPLICABLE_NO_CEILING`、`modeAfterReset = NOT_APPLICABLE_NO_GAME_NUMBER_MODE`。
- 設定変更専用の短縮天井、高確/CZ/AT優遇、朝一専用モード、公開朝一当選率等は **NONE_CONFIRMED_AFTER_RESEARCH / NOT_APPLICABLE**。
- 据え置き時の天井G・規定G・AT/ART/CZ引継ぎも非該当。
- 純電源OFF→ON時の本機固有のリール位置・表示・ボーナス成立状態等の復帰契約は **UNVERIFIED_AFTER_RESEARCH**。一般的なノーマル機挙動から補完しない。
- ガックン/リール初動/ランプ表示による設定変更判別は、`ガックン / リール / 朝一 / 設定変更 / リセット / 据え置き / 電源` を本機名・型式名と組み替え、当時攻略・旧DB・後年沖スロ回顧まで再探索したが **UNVERIFIED_AFTER_RESEARCH**。
- REG中左右ランプは設定推測要素であり、変更判別として扱わない。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2014-11-17群 — OPEN / FINAL AUDIT REQUIRED

### 登録済み

- No.854 **パチスロひぐらしのなく頃に煌**（オーイズミ）— 2014-11-17。
- No.855 **トリプルクラウンZERO-ONE**（清龍ゲームジャパン）— 2014-11-17。

### 今回の群監査メモ

- HAZUSE / K-Navi / 当時新台一覧・月次記事系を検索し、11/17具体日で上記2機以外の未登録パチスロを今回安全に固定できなかった。
- ただしALL7 2014/11月ページを直接安定取得できなかったため、群CLOSEDは次回のメーカー横断最終監査後に判定する。
- 11/17群CLOSED後は **2014-11-18〜11-30境界**を監査し、次の強い具体日へ進む。
- 現時点の次月強アンカーは **2014-12-01「パチスロ アレジン」（藤商事）**。当時資料で12/1稼働開始を確認できるが、11月後半の未処理機がないことを先に確認してから進む。

## 2014-10-20群 — CLOSED_FOR_CURRENT_RESEARCH

- No.851 **スーパービンゴNEO**（ベルコ）— 2014-10-20。
- No.853 **パチスロ カウボーイビバップ**（オリンピア）— 10/20 vs 10/27 CONFLICT。
- No.852 **パチスロ バーストエンジェル**（山佐）— 10/06 vs 10/20 CONFLICT、最古具体日の10/06へ遡及登録済み。10/20重複禁止。
- 10/20群は既にCLOSED_FOR_CURRENT_RESEARCH。

## 遡及 resetBehavior QA カーソル

- 次: `docs/real_machine_db/machines/2007-03-19_kakumei-senshi-choshu-riki.md`（革命戦士長州力）。
- 新規本線を止めず、既存PARTIAL/COMPLETE_COREを1件ずつ再QAする。

## safeguard

- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコードを優先。
- exact release dateでは「導入予定」「全国導入」「地域先行」「実ホール導入済み」を区別する。
- ALL7単独で同日群CLOSED判定しない。
- トリプルクラウンZERO-ONEの11/17 vs 旧パチマガ12月表記は平均/勝手な統合をしない。
- 他トリプルクラウンシリーズのガックン・朝一情報をZERO-ONEへ自動転記しない。
- 一般的な5号機/ノーマル機の設定変更・電断挙動を本機固有契約として推定転記しない。
- カウボーイビバップの旧「400G以内81.25%」リセット解析は誤報訂正済み。canonical値として復活させない。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意を維持。

## 次回再開地点

1. **recordCount 855 / chronologicalFrontier 2014-11-17 / 11-17_GROUP_OPEN_FINAL_AUDIT_REQUIRED** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / No.855を再確認。
3. **2014-11-17同日群を全メーカー横断で最終監査**。未登録がなければ `2014-11-17_GROUP_CLOSED_FOR_CURRENT_RESEARCH`。
4. 続いて **2014-11-18〜11-30境界**を監査し、次の未処理具体日を確定する。
5. 境界に未処理がなければ **2014-12-01「パチスロ アレジン」（藤商事）** から処理。
6. 遡及QAは `2007-03-19_kakumei-senshi-choshu-riki.md` から再開。

## 主要出典 — 取得日 2026-09-07

### トリプルクラウンZERO-ONE
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0620/`
- K-Navi: `https://p-kn.com/slot/2147/`
- K-Navi ボーナス確率: `https://p-kn.com/slot/2147/52058/`
- 旧パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/05/h.php`
- 旧パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/05/a.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/7548`

### 11月境界 / 次月アンカー
- パチ7 2014年11月記事: `https://pachiseven.jp/articles/detail/152`
- パチスロ アレジン初日稼働記事: `https://p-media.info/%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%82%A2%E3%83%AC%E3%82%B8%E3%83%B3%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E5%88%9D%E6%97%A5%E7%A8%BC%E5%83%8D%E7%8A%B6%E6%B3%81%E3%81%AE%E9%80%9F%E5%A0%B1%E3%83%A1/`
