更新日: 2026-09-08

## 現在地点
- recordCount: **1014**
- latestRecordAdded: **パチスロ北斗の拳 修羅の国篇**（サミー）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-10-03_pachislot-hokuto-no-ken-shura-no-kuni-hen.md`
- chronologicalFrontier: **2016-10-03**
- frontierLatestMachine: **パチスロ北斗の拳 修羅の国篇 — No.1014**
- schema: **resetBehavior v0.7**
- status: **2016-09-20_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-09-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH / 2016-10-03_GROUP_OPEN / 2016-09-12_RETRO_GAP_FILLED**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前進捗を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。INDEX自体は不用意に全件再生成していない。
- main正本は **1013件 / chronologicalFrontier 2016-09-26 / 09/26群OPEN** から継続。
- 09/26具体日付でK-Naviに存在する `ニューアイムジャグラーEXレッドゴールドパネル` は、同一型式EX-KAをNo.1013として09/12 canonical + 09/26 CONFLICTで既登録。別レコードを作らない。
- 09/26群を日付検索、K-Navi系、HAZUSE系、当時新台/後年一覧の検索語を変えて再監査したが、EX-KA以外に2016-09-26全国導入本線へ独立固定できる未登録5号機を今回確認できなかったため **2016-09-26_GROUP_CLOSED_FOR_CURRENT_RESEARCH**。
- 09/27〜10/02境界も同様に全国導入本線の未登録5号機を固定できず、chronologicalFrontierを **2016-10-03** へ前進。
- 2016-10-03群の先頭として、サミー公式が同日をホール導入日と明記する `パチスロ北斗の拳 修羅の国篇` をNo.1014として追加。

## No.1014 — パチスロ北斗の拳 修羅の国篇
- manufacturer: **サミー / Sammy**
- releaseDate: **2016-10-03**
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / A+ART / リアルボーナス+セット継続ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_IDENTITY_PARTIAL**

### identity/data quality
- Sammy公式2016-07-13発売発表を確認。
- Sammy公式マイスロが **2016-10-03を本機のホール導入日** と直接明記。K-Navi/パチ7も同日で一致。
- 正式型式名/検定番号は、機種名+型式+検定+6S系、HAZUSE、中古実機DB、公的告示系の検索語を変えて再探索したが、2016年ART版を直接固定できる高信頼資料を今回取得できず `UNVERIFIED_AFTER_RESEARCH`。
- 2018年 `羅刹ver.` の型式 `パチスロ北斗の拳AA／ZS` / 検定7S0983は別機種なので誤転記しない。

### performanceCore
- 機械割: **97.9 / 99.0 / 101.2 / 105.4 / 110.1 / 115.1%**。
- ART初当たり: **1/436.1 / 418.5 / 383.2 / 324.7 / 290.2 / 237.1**。
- ボーナス: 全設定 **約1/963.8（約1/964）**。
- 50枚ベース: **約37G**。
- ART純増: **約2.0枚/G**。
- ART「闘神演舞」: **1セット50G**。
- リアルボーナス「天舞の刻 / 闘神演舞TURBO」: **約150枚**。
- 通常天井: **ART間1300G+前兆**。天舞の刻ボーナスではART間ゲーム数をリセットしない。

### resetBehavior v0.7
- 設定変更: **ART間天井RESET / 低確・通常・高確へモードRESELECT**。
- 据え置き: **天井進捗・内部モードCARRYOVER**。
- 純電源OFF→ON: **天井進捗・内部モードCARRYOVER**。
- リセット専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更後も公開上の最大天井はART間1300G+前兆。
- 設定変更時RT状態: 当時必勝本で「現在調査中」。別系統再探索でも直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 電断時液晶ステージ: 当時一撃資料で「現在調査中」。再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のメーカー保証ガックン判別: **NONE_CONFIRMED_AFTER_RESEARCH**。

### 公開朝一モード数値
| 設定 | 低確 | 通常 | 高確 |
|---:|---:|---:|---:|
| 1 | 56.25% | 31.25% | 12.50% |
| 2 | 53.75% | 31.25% | 15.00% |
| 3 | 42.50% | 37.50% | 20.00% |
| 4 | 37.50% | 37.50% | 25.00% |
| 5 | 25.00% | 43.75% | 31.25% |
| 6 | 18.75% | 43.75% | 37.50% |

- 一撃とパチ＆スロ必勝本の別系統資料で同系列を照合。
- 高設定ほど設定変更後の高確スタート率が高く、朝一挙動の比較材料になるが単独確定判別にはしない。
- 設定変更で前日天井進捗と前日内部モードは消失するため、据え置き狙い側には不利要素となる。

## 2016-09-20群 — CLOSED_FOR_CURRENT_RESEARCH
登録済み:
- **SLOT魔法少女まどか☆マギカ2**（メーシー）— No.1010
- **乱嵐エイサー-30**（オーイズミ）— No.1011

## 2016-09-26群 — CLOSED_FOR_CURRENT_RESEARCH
- K-Naviの `ニューアイムジャグラーEXレッドゴールドパネル` はNo.1013 EX-KAの導入日CONFLICTとして統合済み。
- 検索語・資料系統を変えて再監査したが、同日全国導入本線に独立固定できる追加未登録機を今回確認できなかった。
- 後続QAで新資料が出た場合は再OPEN可。

## 2016-10-03群 — OPEN
登録済み:
- **パチスロ北斗の拳 修羅の国篇**（サミー）— No.1014

未処理:
- 10/03群の全メーカー横断監査を継続し、同日未登録機を導入日・型式/機種同一性まで確認して追加する。
- 「更新日が2016-10-03」の古い解析ページを、その機種の導入日と誤認しない（十字架3、エヴァ魂を繋ぐもの、トータル・イクリプス、ひぐらし絆等は解析更新日として10/03が検索に混入するため注意）。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- ゴルゴ13のreset側は `PARTIAL_RESEARCH_EXHAUSTED` まで更新済み。
- 次は2006-03-27より後の既存未QAレコードを最新main実体から時系列で特定して継続。旧INDEXのファイル名から推測しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1014を再取得。
2. **1014件 / chronologicalFrontier 2016-10-03 / 10/03群OPEN** を正本として継続。
3. **2016-10-03群の全メーカー横断監査**を継続。同日未登録機があればNo.1015として追加。
4. 検索結果の「2016-10-03更新」を導入日と混同しない。実導入日は機種別ページ/公式/業界資料で固定する。
5. 10/03群が閉じられたら10/04以降の次導入群境界を監査して時系列前進。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索後のみ確定。競合は平均せずCONFLICT。
7. 遡及reset QAはゴルゴ13の次の既存未QAレコードから継続。

## 主要出典 — 取得日 2026-09-08
### No.1014 パチスロ北斗の拳 修羅の国篇
- Sammy公式 発売発表: https://www.sammy.co.jp/japanese/news/2016/558.html
- Sammy公式 マイスロ導入日: https://www.sammy.co.jp/japanese/myslot/news/index_10.html
- K-Navi: https://p-kn.com/slot/2576/
- P-WORLD: https://www.p-world.co.jp/machine/database/8119
- パチ7 天井: https://pachiseven.jp/machines/4910/cutout/78
- 一撃 天井/設定変更: https://1geki.jp/slot/s_hokuto_syura/3/
- 一撃 通常時モード: https://1geki.jp/slot/s_hokuto_syura/42/
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/2790/1/60256
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/153/l.php
- 期待値見える化: https://slotjin.com/zone/hokutonoken-shura/

### 09/26境界監査
- K-Navi ニューアイムジャグラーEXレッドゴールドパネル: https://p-kn.com/slot/2602/
