# ジャックポットトロピカルバージョン30

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: ジャックポットトロピカルバージョン30
aliases:
- ジャックポットトロピカルバージョン-30
- ジャックポットトロピカルバージョン30Φ
manufacturer: 岡崎産業
releaseDate: 2007-05（5号機クロニクル、後年一覧で一致。日単位の納品/全国ホール導入日は今回未確定）
generation: 5号機初期
systemType: ノーマル / 完全告知 / 30Φ

## 性能コア

payoutRateBySetting:
- 設定1: 96.2%
- 設定2: 98.1%
- 設定3: 101.0%
- 設定4: 104.5%
- 設定5: 107.4%
- 設定6: 110.1%

confidence: ANALYSIS_HIGH

note:
- 5号機クロニクルは30Φ版を独立機種として2007/5導入とし、2006年25Φ版と同一のリール配列・機械割を掲載。
- HAZUSEは25Φ版解析ページ内で「30パイ仕様のジャックポットトロピカルバージョン-30も存在」と明記し、同ページに設定別ボーナス確率・機械割・獲得枚数を掲載している。
- 30Φ単独ページで設定別ボーナス確率を再掲した高信頼資料は今回見つからないため、ボーナス確率は「同仕様資料として参照」と明示し、別スペック推定ではないことを区別する。

initialHitBySetting:
- HAZUSE共通仕様ページ掲載値
  - BIG: 1/318.1, 1/306.2, 1/287.4, 1/269.7, 1/258.0, 1/249.2（設定1→6）
  - REG: 1/590.4, 1/565.0, 1/541.6, 1/492.8, 1/439.8, 1/394.8
  - 合算: 1/206.6, 1/198.5, 1/187.5, 1/173.9, 1/162.5, 1/152.6

confidence: ANALYSIS_HIGH_WITH_VARIANT_CAVEAT

baseGamesPer50:
- UNVERIFIED
- 「ジャックポットトロピカルバージョン30 / -30 / 30Φ」「50枚 / 1000円 / ベース / コイン持ち」を組み替え、岡崎産業系資料、当時HAZUSE、5号機DB、後年一覧を横断したが比較可能値を確定できず。

netIncrease:
- NOT_APPLICABLE（RT/ARTなしのノーマル機として確認）

basicPayout:
- BIG: 約329枚（346枚超払い出しで終了）
- REG: 通常手順で平均約104枚、技術介入手順で119枚獲得可能。140枚超払い出しで終了。

confidence: ANALYSIS_HIGH_WITH_VARIANT_CAVEAT

modeSpecificMinimumData:
- 完全告知。巨大ハイビスカス点灯でボーナス。
- リプレイ成立時にボーナス同時抽選。
- 30Φ仕様。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- 機種名表記揺れ・岡崎産業・型式候補と「設定変更 / リセット / 朝一 / ガックン / 据え置き」を組み替えて再探索したが、本機固有の設定変更時状態再抽選や朝一専用挙動を明記した高信頼資料は確認できずUNVERIFIED。

carryOverBehavior:
- 通常時ゲーム数天井、RT/ART状態、モードストックはNONE_CONFIRMED。
- 成立済みボーナス等の特殊状態の据え置き処理はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみで天井短縮・朝一専用モード・当選優遇が生じる根拠はNONE_CONFIRMED。
- 成立済みボーナス/表示状態の電断処理はUNVERIFIED。

gameCounterReset:
- 通常時ゲーム数天井はNONE_CONFIRMED / NOT_APPLICABLE相当。

ceilingAfterReset:
- NONE_CONFIRMED。

modeAfterReset:
- モード管理型としての公開情報はNONE_CONFIRMED。

stateAfterReset:
- RT/ART/AT非搭載のノーマル機。朝一狙いに直結する内部状態再抽選はNONE_CONFIRMED。
- 成立済みボーナス等の特殊状態処理はUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 朝一/設定変更専用の天井短縮・モード優遇・初当たり優遇はNONE_CONFIRMED。

resetPenalties:
- NONE_CONFIRMED。

resetDetection:
- 本機固有のガックン、表示、ゲーム数挙動による設定変更判別は、十分な再探索後も高信頼資料で確認できずUNVERIFIED。

numericResetData:
- 設定変更時モード振り分け: NONE_CONFIRMED
- 短縮天井: NONE_CONFIRMED
- 朝一当選率/恩恵発生率: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. 5号機クロニクル — 岡崎産業5号機全機種一覧
   - https://5goki.com/okazaki
   - 30Φ版を独立して2007/5導入と掲載。2006年25Φ版と同じリール配列画像、設定別機械割96.2〜110.1%を掲載。
   - reliability: ANALYSIS_SINGLE
2. HAZUSE — ジャックポット・トロピカルバージョン解析・機種情報
   - https://www.hazuse.com/i/data/jackpot_t/top.htm
   - 30パイ仕様の存在を明記。同ページにBIG/REG/合算、機械割、BIG約329枚、REG約104枚/技術介入119枚を掲載。2007-05-07更新履歴あり。
   - reliability: ANALYSIS_HIGH
3. P-WORLD / グリーンべると — 岡崎産業が5号機『ジャックポット』発表
   - https://news.p-world.co.jp/articles/1861/greenbelt
   - 25Φ元機の型式名アストラル、BB約329枚、RB約104枚、合算端点1/206.7〜1/152.8、出玉率端点98.18〜110.13%、2006年11月中旬納品予定を確認。30Φ版の月確定には使用しない。
   - reliability: INDUSTRY
4. スロリスクタイム — 5号機一覧
   - https://pachisuro100.com/itiran/
   - ジャックポットトロピカルバージョン30を岡崎産業・ノーマル・2007/5として独立掲載。
   - reliability: ANALYSIS_SINGLE

## missingFields

- 日単位の実納品/全国ホール導入日
- 30Φ単独資料として再掲された設定別BIG/REG/合算
- 50枚あたりゲーム数 / 1000円ベース
- 設定変更/据え置き/電源OFF→ON時の成立済みボーナス等の特殊状態処理
- 本機固有の設定変更判別（ガックン等）

## conflicts

- 機械割の端数精度は資料で96.2〜110.1%（5号機クロニクル/HAZUSE）と、元25Φ当時資料96.18〜110.13%がある。丸め差として併記し、平均化しない。

## QA note

- 30Φ版は独立レコード化するが、性能値のうちボーナス確率・獲得枚数はHAZUSEが30Φ版存在を明記した共通解析ページを根拠に採用。30Φ単独スペック資料が将来見つかった場合は照合する。
- resetBehaviorは表記揺れと設定変更関連語を変えて再探索し、朝一専用恩恵・天井・モードはNONE_CONFIRMED、本機固有の変更/電断特殊処理のみUNVERIFIEDとした。
