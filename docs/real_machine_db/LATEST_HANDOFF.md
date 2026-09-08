# 実機DB 最新リレー引継ぎ

更新日: 2026-09-08

## 現在地点
- recordCount: **974**
- latestRecordAdded: **アステカ-太陽の紋章-**（エレコ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-04-18_azteca-taiyo-no-monsho.md`
- chronologicalFrontier: **2016-04-18**
- frontierLatestMachine: **アステカ-太陽の紋章-**
- schema: **resetBehavior v0.7**
- status: **2016-04-18_GROUP_OPEN**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、No.973 `2016-04-18_super-street-fighter-iv.md` を再取得してから作業。
- INDEXは19件時点の旧集約のため、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点は recordCount 973 / chronologicalFrontier 2016-04-18 / 04-18群OPEN。前回指定の次候補アステカから継続。

## 2016-04-04群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.968 パチスロ 機動警察パトレイバー（北電子）
- No.969 キングパルサー～DOT PULSAR～（山佐）
- No.970 探偵歌劇 ミルキィホームズ TD 消えた7と奇跡の歌（DAXEL）

## 2016-04-11群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- No.971 プチマーメイド（北電子）
- No.972 パチスロ マブラヴ オルタネイティヴ トータル・イクリプス（SANKYO、4/11 vs 4/18 CONFLICT保持）

## 2016-04-18群 — OPEN
登録済み:
- No.973 **スーパーストリートファイターIV パチスロエディション**（エンターライズ）
- No.974 **アステカ-太陽の紋章-**（エレコ）
- No.972 トータル・イクリプスは4/18表記資料もあるが既登録のため重複登録しない。

## No.974 — アステカ-太陽の紋章-
- record: `docs/real_machine_db/machines/2016-04-18_azteca-taiyo-no-monsho.md`
- manufacturer: **エレコ**
- releaseDate: **2016-04-18**
- formalModelName: **アステカ太陽の紋章AE**
- certificationNumber: **6S0049**
- generation/system: **5号機 / A+ART+CT**

### performanceCore
- 機械割 canonical: **99.3 / 99.5 / 101.9 / 103.8 / 106.0 / 109.0%**。
- 後年整理資料に **98.5 / 98.8 / 101.0 / 103.8 / 106.0 / 109.0%** があるため平均せずCONFLICT保持。
- ボーナス: **1/344.9 / 334.4 / 324.4 / 315.1 / 306.2 / 290.0**。
- ART初当たり: **1/494.6 / 391.6 / 472.1 / 353.7 / 387.4 / 260.7**。
- ベース: **約34.3～34.5G/50枚**。
- ART純増: **約1.5枚/G**、ボーナス込み **約1.9枚/G**。
- アステカボーナス **純増150枚**。
- ART「アステカRUSH」 **1セット50G+α**。

### resetBehavior v0.7
- 設定変更時: **1180G天井進捗RESET / 内部状態RESELECT**。
- 設定変更時状態振り分け: **通常87.50% / 高確12.50%（全設定共通）**。
- 高確には10G保証。
- 通常天井: **ボーナス＆ART間1180G + 最大前兆32GでART**。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き時の天井/状態契約: **UNVERIFIED_AFTER_RESEARCH**。設定変更情報から自動推定しない。
- 純電源OFF→ON時の天井/状態/ステージ契約: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 朝一恩恵: **12.5%高確スタート**。
- 朝一不利: 設定変更で前日1180G天井進捗を失う。
- 変更判別: 本機固有の確定ガックン/初期出目/ランプ/ステージ契約は **NONE_CONFIRMED_AFTER_RESEARCH**。

### conflicts / caution
- `CONFLICT_PAYOUT_STANDARD_99_3_99_5_101_9_103_8_106_0_109_0_VS_98_5_98_8_101_0_103_8_106_0_109_0`
- 競合は平均せず、当時複数資料一致の99.3～109.0%系列をcanonicalとして保持。

## 04/18群 次の確認候補
1. **ニューチバリヨ**
   - 2016年導入日一覧で4/18群候補。
   - 次回、正式メーカー・型式・検定番号・全国導入日を当時DB/業界資料で先に固定し、性能コア＋resetBehavior v0.7を収集する。
2. ニューチバリヨ処理後、04/18群を全メーカー横断監査し、追加本線候補がなければCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-02_new-oasis.md**
- retroQaNextInspection: **2006-02_nurse-witch-komugi-chan-magicalte.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は時系列本線No.974を優先し、遡及QAは進めていない。

## 次回再開地点
1. **recordCount 974 / chronologicalFrontier 2016-04-18 / 04-18群OPEN** から開始。
2. README / mission v0.7 / INDEX / LATEST_HANDOFF / No.973 / No.974を最新mainから再取得。
3. 次の未処理候補 **ニューチバリヨ** を、まず日付・メーカー・型式・検定番号から再照合する。
4. 4/18全国初導入が固定できた場合はNo.975候補として性能コア＋resetBehavior v0.7を処理。
5. 4/18ではない場合は正しい導入日にキューを配置し、04/18群の残存候補を全メーカー横断監査。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・設定変更/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・当時解析・古DB・アーカイブ・回顧資料まで再探索後のみ付与。
7. 競合は平均せずCONFLICT/variant差/定義差として双方保存。
8. 遡及QAは `2006-02_nurse-witch-komugi-chan-magicalte.md` から継続。

## safeguard
- INDEXは旧集約状態なので進捗正本にしない。LATEST_HANDOFF + 実レコード + 最新mainコミットを優先。
- 全国導入日と記事公開日・公式ページ更新日・発表日・納品予定日・地域先行日を混同しない。
- 25φ/30φや型式・メーカー・導入時期が分かれるvariantを同名だけで統合しない。
- 設定変更・据え置き・純電断・RAMクリアを同義扱いしない。
- 設定変更RESETを根拠に据え置き/純電断を自動でCARRYOVER認定しない。
- 前作/後継機・同名別機種のresetBehaviorを流用しない。

## 主要出典 — 取得日 2026-09-08
### No.974 アステカ-太陽の紋章-
- HAZUSE: https://hazuse.com/machine/pachislot/6S0049/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/6S0049/genre/208/
- パチビー: https://www.pachibee.jp/machines/index/216030006
- K-Navi: https://p-kn.com/slot/2478/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/18561/
- パチ7通常時解析: https://pachiseven.jp/machines/4804/cutout/94
- crankyseven: https://crankyseven.com/azteca-taiyo-pc.htm
- pachinavi: https://pachinavi.net/machines/azteca/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/98/a.php
- ユニバチャンネル公式PV: https://www.youtube.com/watch?v=agT9WAlPQZM
