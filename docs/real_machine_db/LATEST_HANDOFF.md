# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **781**
- latestMachineAddedByChronology: **スゴスロ**（ネット）
- latestRecord: `docs/real_machine_db/machines/2013-12-02_sugoslo.md`
- chronologicalFrontier: **2013-12-02**
- frontierLatestExactDateMachine: **スゴスロ**
- schema: **resetBehavior v0.7**
- status: **OPEN_2013-12-02_GROUP__SUGOSLO_DONE__NEXT_SHONAN_JUNAI_GUMI**

## 今回の同期 / 重要事項

- 最新mainの README、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコード `2013-12-02_urusei-yatsura-3.md` を再読。
- INDEXは旧集約状態のため README 規定どおり **LATEST_HANDOFF + 実レコード** を正本扱い。
- 作業開始時正本は recordCount 780 / chronologicalFrontier 2013-12-02 / 12-02群OPEN / 次候補スゴスロ。
- GitHub内に既存レコードがない **スゴスロ（ネット）** を781件目として追加。
- 2013-12-02群は **OPEN**。既知未処理候補は **パチスロ湘南純愛組！（ニューギン） / パチスロ獣王 王者の帰還（Sammy）**。この2機処理後に全メーカー横断再監査してCLOSED判定する。

## 今回追加 — スゴスロ

### identity / 性能コア

- manufacturer: **ネット（NET）**。
- 型式: **スゴスロ-C** / 検定番号 **3S0780**。
- releaseDate: 本線時系列キー **2013-12-02**。グリーンべるとは同日に「導入と同時にアプリ発売」と報道。パチマガスロマガも2013年12月扱い。
- P-WORLD DBのみ導入開始欄が **2013年11月**のため `CONFLICT_RELEASE_PERIOD_2013_11_VS_EXACT_INDUSTRY_2013_12_02` として保持し、具体日を報じる業界記事を時系列キーに採用。
- generation/system: **5号機 / AT / CZ / MAP・周期管理 / ゲーム数上乗せ / 天井**。
- 設定別PAYOUT: **97.0 / 98.5 / 100.0 / 102.3 / 107.5 / 115.3%**。
- AT初当たり: **1/262 / 258 / 253 / 231 / 206 / 169**。
- AT「勇者の剣」: **1セット50G+α / 純増約2.5枚/G**。
- baseGamesPer50: 後年整理資料で **約30G/1000円（≒50枚）**。当時別系統から数値本体を独立回収できなかったため **ANALYSIS_SINGLE_RETROSPECTIVE**。
- 天井: 固定G数ではなく **天井MAP管理**。最大40MAPでAT確定。10 / 15 / 20 / 25 / 30 / 35MAPにも天井MAP候補あり。後年資料の「約1200G」は40MAP到達の目安で、固定1200G天井として扱わない。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- setting change: 本機固有解析で **MAP進捗リセット + 天井MAP数再抽選**を確認。
- gameCounterReset: 本機はMAP管理。setting change **MAP_PROGRESS_RESET_CONFIRMED__CEILING_MAP_RESELECT_CONFIRMED**。
- ceilingAfterReset: 設定変更時はMAP進捗を消去して天井MAP再抽選。設定変更専用の具体振り分け率や「必ずN MAP以内」の固定短縮契約は **UNVERIFIED_AFTER_RESEARCH / NONE_CONFIRMED_AFTER_RESEARCH**。
- carry-over: 純据え置き時のMAP進捗 / 天井MAP / 状態保持契約は本機固有に直接固定できず **UNVERIFIED_AFTER_RESEARCH**。設定変更時RESETの逆からKEEPを推定しない。
- power OFF→ON only: 単純電断・再起動時のMAP進捗 / 天井MAP / 状態保持契約は **UNVERIFIED_AFTER_RESEARCH**。
- mode/state: 通常時MAPシナリオ・職業・チャンスステージ等は存在するが、設定変更時の具体的初期/振り分けは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits: 天井MAP再抽選の結果として浅いMAPが選ばれる可能性はあるが、設定変更専用恩恵としての公開振り分け/期待値は **NO_QUANTIFIED_RESET_ONLY_BENEFIT_CONFIRMED_AFTER_RESEARCH**。
- resetPenalties: 前日のMAP進捗が設定変更で消えるため、深い宵越し進捗を期待する場合には不利。
- resetDetection: ガックン / 初期出目 / 液晶初期MAP / 職業 / ランプ等による本機固有変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更時 **MAP進捗リセット + 天井MAP数再抽選**。通常仕様の天井MAP候補は **10 / 15 / 20 / 25 / 30 / 35 / 最大40MAP**。設定変更時専用の各振り分け率は未確定。

## safeguards / conflicts

- 導入時期はP-WORLD「2013年11月」とグリーンべると具体日「2013-12-02」が競合。平均化せず双方保持。
- 約1200Gは最大40MAPの目安。内部天井を1200G固定としない。
- 設定変更時の天井MAP再抽選から、据え置き・純電断時の保持を逆算しない。
- 通常時の10/15/20/25/30/35/40MAP候補を、設定変更専用の短縮天井振り分けとして転記しない。

## 2013-12-02群

- 処理済み: **うる星やつら3 / スゴスロ**。
- 既知未処理候補: **パチスロ湘南純愛組！ / パチスロ獣王 王者の帰還**。
- status: **OPEN**。既知候補処理後にALL7 / K-Navi / HAZUSE / P-WORLD / 当時業界記事等でメーカー横断監査する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線781件目を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 781 / chronologicalFrontier 2013-12-02 / 12-02群OPEN** から開始。
2. 次の未処理候補 **「パチスロ湘南純愛組！」（ニューギン）** を性能コア + resetBehavior v0.7で782件目候補として処理。
3. 続いて **パチスロ獣王 王者の帰還**。
4. その後2013-12-02同日全メーカー監査を行い、漏れがなければCLOSED。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で最初のresetBehavior欠損機を確定し補完。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合はCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/6232/greenbelt`
- グリーンべると現行アーカイブ: `https://web-greenbelt.jp/00001260/`
- P-WORLD スゴスロ: `https://www.p-world.co.jp/machine/database/7238`
- パチマガスロマガ 基本: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/158/a.php`
- パチマガスロマガ AT突入フロー: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/158/l.php`
- パチマガスロマガ AT初当たり: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/158/h.php`
- pacnk スゴスロ: `https://pacnk.com/slot/tools/sh_sgoslo.html`
- スロパチクエスト スゴスロまとめ: `https://www.slopachi-quest.com/kisyubetsu/sugoslo/`
- slot-kakaku スゴスロ実機: `https://slot-kakaku.com/%E3%82%B9%E3%82%B4%E3%82%B9%E3%83%AD%E5%AE%9F%E6%A9%9F/`
